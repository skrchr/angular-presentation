import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public user: UserService) {}

  public nameChange($event): void {
    console.log($event);
    this.user.setName($event.detail.value);
  }

  public surnameChange($event): void {
    console.log($event);
    this.user.setSurname($event.detail.value);
  }

}
