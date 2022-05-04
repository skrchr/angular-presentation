import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private name: string;
  private surname: string;

  constructor() { 

  }


  public getName(): string {
    return this.name;
  } 

  public getSurname(): string {
    return this.surname;
  }

  public setName(name: string): void {
    this.name = name;
  } 

  public setSurname(surname: string): void {
    this.surname = surname;
  }

  public setUserInfo(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

}
