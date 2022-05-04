import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    BatteryStatus,
    CallNumber,
    UtilsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
