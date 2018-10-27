import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses ;
  prices ;
  choice;
  price ;

  constructor() {
    this.courses = [ 'English', 'Math' , 'Science' ];
    this.prices = [ '200' , '350' , '500' ]
   
   }

  ngOnInit() {
  }

}
