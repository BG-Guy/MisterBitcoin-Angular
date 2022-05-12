import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model'; 
import { Contact } from '../models/contact.model';
import { UtilsService } from './utils-service.service';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private KEY = 'user';
  private _user: User;
  private _user$ = new BehaviorSubject<User>(this.utilsService.load(this.KEY) || null);
  // private _transaction = new BehaviorSubject<Transaction>({})
  public user$ = this._user$.asObservable();

  constructor(private utilsService: UtilsService) { }

  public getUser() {
    return this.user$;
  }

  public login(name: string): void {
    let user = this.utilsService.load(this.KEY);
    if (!user) {
        let newUser = new User();
        newUser.name = name;
        this.utilsService.store(this.KEY, newUser);
        this._user = newUser;
    }
    this._user$.next(this._user);
}

  public isAuthenticated(): boolean {
    const user = this._user$.value;
    // return (user) ? true : false;
    return !!user;
  }

  public addTransaction(contact: Contact, amount: number): void {
    let newTransaction = new Transaction
    newTransaction._id = this.utilsService.setId();
    newTransaction.to = contact.name;
    newTransaction.timestamp = Date.now();
    newTransaction.amount = amount;
    const editedUser = { ...this._user$.value };
    editedUser.balance -= amount;
    editedUser.transactions.unshift(newTransaction);
    this.utilsService.store(this.KEY, editedUser);
    this._user$.next(editedUser);
  }


}
