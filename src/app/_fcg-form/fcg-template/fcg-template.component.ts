import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import baseJson from "../../../assets/fcg-form/base.json";
import contributingJson from "../../../assets/fcg-form/contributing-unit.json";
import conditionalJson from "../../../assets/fcg-form/conditional-unit.json";
import exampleModelJson from "../../../assets/fcg-example-1.json";
import {ActivatedRoute} from "@angular/router";
import {ClipboardService} from "ngx-clipboard";

@Component({
  selector: 'app-fcg-template',
  templateUrl: './fcg-template.component.html',
  styleUrls: ['./fcg-template.component.scss']
})
export class FcgTemplateComponent implements OnInit {
  codePreviewShow: boolean = false;
  fcgCode: string = "";
  form = new FormGroup({});
  fcgModel: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = []

  constructor(
    private route: ActivatedRoute,
    private clipboardApi: ClipboardService
  ) {
    this.fields = [
      baseJson,
      {
        "key": "constructions",
        "type": "repeat",
        "wrappers": ["section"],
        "templateOptions": {
          "label": "Construction list",
          "description": "Lists of all constructions in the grammar",
          "minItems": 1,
          "addText": "Add construction"
        },
        "validators": {},
        "expressionProperties": {},
        "fieldArray": {
          "key": "construction",
          "templateOptions": {
            "label": "Construction"
          },
          "fieldGroup": [
            {
              "key": "constructionName",
              "type": "input",
              "templateOptions": {
                "label": "Construction Name"
              },
              "expressionProperties": {}
            },
            contributingJson,
            conditionalJson
          ]
        }
      }
    ];
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id == "demo") {
      this.fcgModel = exampleModelJson;
    } else {
      this.fcgModel = {
        "base": {
          "grammarId": "",
          "title": "",
          "version": "",
          "featureTypes": {
            "argsSequence": false,
            "constituentsSequence": false,
            "formSetOfPredicates": false,
            "meaningSetOfPredicates": false,
            "dependentsSequence": false
          },
          "hierarchyFeatures": {
            "constituentsDependents": false
          },
          "description": ""
        },
        "constructions": []
      }
    }
  }

  transformToFcgEditorCode() {
    if (this.form.valid) {
      const baseData = this.fcgModel.base;
      const constructionsCodes = this.buildConstructionCodes();
      this.fcgCode = `
;; Title: ${baseData.title}
;; Version: ${baseData.version}
(def-fcg-constructions ${baseData.grammarId})
      
${constructionsCodes}
      `;
      this.codePreviewShow = true;
    } else {
      alert("The form is invalid")
    }
  }

  private buildConstructionCodes() {
    const cxnList: any[] = this.fcgModel.constructions;
    return cxnList.map(cxn => {
      const contributingCodes = this.buildContributingCodes(cxn.contributingPart);
      const conditionalCodes = this.buildConditionalCodes(cxn.conditionalPart);
      return `
(def-fcg-cxn ${cxn.constructionName}
    (${contributingCodes}
      <-
      ${conditionalCodes}
    )
)`;
    }).join("\n")
  }

  private buildContributingCodes(contributingPart: any[]) {
    return contributingPart.map(unit => {
      return `
      (?${unit.variableName}
${this.buildFeatureSet(unit.featureSet)}
      )`;
    }).join("")
  }

  private buildConditionalCodes(conditionalPart: any[]) {
    return conditionalPart.map(unit => {
      let formulationCodes = "";
      if (unit.formulation) {
        formulationCodes = `${this.buildFeatureSet(unit.formulation)}`;
      }
      let comprehensionCodes = "";
      if (unit.comprehension) {
        comprehensionCodes += `${this.buildFeatureSet(unit.comprehension)}`;
      }
      let unitCodes = `
      (?${unit.variableName}
${formulationCodes}
        --
${comprehensionCodes}
      )`;
      return unitCodes;
    }).join("");
  }

  private buildFeatureSet(featureSet: string) {
    return featureSet.split("\n")
      .map(featurePair => {
        return `        (${featurePair})`;
      }).join("\n")
  }

  copyFcgCode() {
    this.clipboardApi.copyFromContent(this.fcgCode);
    alert("Copied!");
  }
}
