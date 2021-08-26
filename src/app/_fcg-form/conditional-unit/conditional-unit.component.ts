import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-unit',
  templateUrl: './conditional-unit.component.html',
  styleUrls: ['./conditional-unit.component.scss']
})
export class ConditionalUnitComponent implements OnInit {
  /*
    "conditionalPart": {
      "description": "The conditional parts",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "variableName": {
            "type": "string"
          },
          "formulation": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "comprehension": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": ["variableName", "comprehension"]
      }
    }
  */

  constructor() { }

  ngOnInit(): void {
  }

}
