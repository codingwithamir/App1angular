import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {

  testObject = { id: 6, name: "testing", price: 100 }
  selectedString = "0";
  selectedCountry:number;

  persoms = [
    { id: 1, name: "Amir1" },
    { id: 2, name: "Amir2" },
    { id: 3, name: "Amir3" }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    return "green";
  }

}
