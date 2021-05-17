import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="Angular Training"; //data binding (creating variable name and connect this name to frontend home.comp
                           // using {{}} .
  constructor() { }

  ngOnInit(): void {
  }

}
