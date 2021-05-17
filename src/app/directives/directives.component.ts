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
  constructor() { }

  ngOnInit(): void {
  }

}
