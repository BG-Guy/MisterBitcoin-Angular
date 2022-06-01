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
  // private _transaction = new BehaviorSubject<Transaction>()
  private _user$ = new BehaviorSubject<User>(this.utilsService.load(this.KEY) || this.getGuestUser() );
  public user$ = this._user$.asObservable();

  constructor(private utilsService: UtilsService) { }

  public getUser() {
    return this.user$;
  }

  public getGuestUser() {
    return {
      name: 'Guest',
      balance: 0,
      transactions: 
        [new Transaction()]
    }
  }

  public getEmptyUser() {
    return {name: '', balance: 0, transactions: [new Transaction()]}
  }

  public logout() {
    let user = this.getGuestUser()
    this._user$.next(user);

  }

  public login(name: string): void {
    let users = this.utilsService.load('user')
    console.log("🚀 ~ file: user.service.ts ~ line 47 ~ UserService ~ login ~ users", users)
    let user = users.find((user) => {
      user.name === name
    })

    if (!user) {
        let newUser = this._user
        newUser.name = name;

        this.utilsService.store(this.KEY, newUser);
        this._user = newUser;
        console.log("🚀 ~ file: user.service.ts ~ line 44 ~ UserService ~ login ~ newUser", newUser)
        return
    }
    let savedUser = this._user
    savedUser.name = user.name
    this._user$.next(savedUser);
    this.utilsService.store('user', savedUser)
    
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
