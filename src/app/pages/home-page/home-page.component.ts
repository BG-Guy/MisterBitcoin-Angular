import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( ) {}


  ngOnInit(): void {
  }
  
  options: AnimationOptions = {
    path: 'assets/Animations/animation-data.json',
  };

  
}
