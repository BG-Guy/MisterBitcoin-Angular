import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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


  @Output ('toggle') onToggle = new EventEmitter()
 

  public onLogin() {
    this.userService.login(this.user.name)
    this.onToggle.emit()
  }

  onModalToggle() {
    this.onToggle.emit()

  }


  ngOnInit(): void {
  }

}
