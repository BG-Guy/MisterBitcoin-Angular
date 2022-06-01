import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User
  userSubscription: Subscription

  @Output ('toggle') onToggle = new EventEmitter()
 
  public onLogin(user: any) {

    console.log("🚀 ~ file: login-modal.component.ts ~ line 22 ~ LoginModalComponent ~ onLogin ~ this.user", this.user)

    this.onToggle.emit()
    this.userService.login(user)
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user);
  }

  onModalToggle() {
    this.onToggle.emit()

  }


  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => this.user = user);
  }

}
