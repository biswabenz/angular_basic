import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
 
  isDisabled:boolean = true;

  redclass = "shape";
  twoway = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  eventfunction(){
    alert("this is window")
  }

}
