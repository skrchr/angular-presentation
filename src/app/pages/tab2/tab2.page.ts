import { UtilsService } from './../../services/utils.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public componentAddValue: number;

  constructor(
    public user: UserService, 
    public utils: UtilsService,
    public cd: ChangeDetectorRef ) {
    window['Tab2'] = this;


  }

  public ngOnInit() {
    
    this.utils.componentListener.subscribe(next => {
      console.log('detectChanges');
      this.cd.detectChanges();
    });
  }

  public addComponent() {
    console.log(this.componentAddValue);
    if (this.componentAddValue != null && this.componentAddValue != undefined) {
      this.utils.componentListener.next({componentId: this.componentAddValue});
    }
  }

}
