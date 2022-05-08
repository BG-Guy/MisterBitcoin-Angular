import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'assets/Animations/bitcoin-fill-animation.json',
  };

  

}
