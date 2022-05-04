import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { PresentationExample } from './presentation-example/presentation-example';


@NgModule({
  imports: [ 
    IonicModule
  ],
  declarations: [PresentationExample],
  exports: [PresentationExample]
})
export class ComponentsModule {}
