import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService{

  constructor(public user: UserService) { 
    
  }

  public printUserInformation(): void {
    console.log(this.user.getName());
    console.log(this.user.getSurname());
  }
}
