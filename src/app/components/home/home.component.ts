import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courseTitle = "Library";

  clicked(){
    console.log('h2 clicked!');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
