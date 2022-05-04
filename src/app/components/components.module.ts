import { CardExample3 } from './card-example-3/card-example-3';
import { CardExample2 } from './card-example-2/card-example-2';
import { CardExample1 } from './card-example-1/card-example-1';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { PresentationExample } from './presentation-example/presentation-example';


@NgModule({
  imports: [ 
    IonicModule
  ],
  declarations: [
    PresentationExample,
    CardExample1, 
    CardExample2,
    CardExample3
  ],
  exports: [
    PresentationExample,
    CardExample1, 
    CardExample2,
    CardExample3
  ]
})
export class ComponentsModule {}
