import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributing-unit',
  templateUrl: './contributing-unit.component.html',
  styleUrls: ['./contributing-unit.component.scss']
})
export class ContributingUnitComponent implements OnInit {
  /*
    "contributionPart": {
      "description": "The contributing parts",
      "type": "object",
      "properties": {
        "units": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "variableName": {
                "type": "string"
              },
              "contents": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "required": ["variableName", "contents"]
          }
        }
      }
    },
  */

  constructor() { }

  ngOnInit(): void {
  }

}
