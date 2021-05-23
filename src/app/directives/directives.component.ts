import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  
  isVisible = true;
  dataname = "apple";
  productname = "appl"
  employeelist =[
    {name: "Appu", designation: ":MLengineer", age: 25},
    {name: "jon", designation: ":Manager", age: 45},
    {name: "ronny", designation: ":web develper", age: 28},
    {name: "rahul", designation: ":analyst", age: 30},
    {name: "vikash", designation: ":frontend", age: 28},
  ]
   userchoice ="Bike";


  constructor() { }

  ngOnInit(): void {
  }

}
