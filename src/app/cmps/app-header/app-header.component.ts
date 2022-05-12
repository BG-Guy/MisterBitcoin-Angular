import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { User } from 'src/app/models/user.model';
import { ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }


  modalToggle = false

  @Output() ('toggle') onToggle = new EventEmitter()
    
  ngOnInit(): void {
  }

  onModalToggle() {
    this.modalToggle = !this.modalToggle
    console.log("🚀 ~ file: login-modal.component.ts ~ line 24 ~ LoginModalComponent ~ onModalToggle ~ this.modalToggle", this.modalToggle) 
  }

  options: AnimationOptions = {
    path: 'assets/Animations/bitcoin-fill-animation.json',
  };

  

}
