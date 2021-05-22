import { NgModule } from '@angular/core';
import { NggaLoadableComponent } from './ngga-loadable.component';

import { DefaultLoaderComponent } from './loaders';

@NgModule({
  declarations: [
    NggaLoadableComponent,
    DefaultLoaderComponent
  ],
  imports: [],
  exports: [NggaLoadableComponent]
})
export class NggaLoadableModule { }
