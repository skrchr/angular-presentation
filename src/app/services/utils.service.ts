import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';


export interface ComponentExample {
  componentId: number
}

@Injectable({
  providedIn: 'root'
})
export class UtilsService{
  
  private publicComponentList: Array<ComponentExample> = [];

  // RxJs Example
  public componentListener: BehaviorSubject<ComponentExample> = new BehaviorSubject<ComponentExample>({componentId: 0}); 

  constructor(public user: UserService) { 

    this.componentListener.subscribe( (next: ComponentExample) => {
      if (next.componentId > 0) {
        this.addComponentToPublicList(next);
      }
    });
  }

  public printUserInformation(): void {
    console.log(this.user.getName());
    console.log(this.user.getSurname());
  }

  public addComponentToPublicList(component: ComponentExample) {
    this.publicComponentList.push(component);
  }

  public getPublicComponents(): Array<ComponentExample> {
    return this.publicComponentList
  }

  public emitComponent(number: number) {
    this.componentListener.next({componentId: number});
  }
}
