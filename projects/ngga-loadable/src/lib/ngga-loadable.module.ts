import { NgModule } from '@angular/core';
import { NggaLoadableComponent } from './ngga-loadable.component';

import { DefaultLoaderComponent } from './loaders';

import { LoadableComponent } from './loadables/base/loadable.component';
import { DefaultLoadableComponent } from './loadables';

@NgModule({
  declarations: [
    NggaLoadableComponent,
    DefaultLoaderComponent,
    LoadableComponent,
    DefaultLoadableComponent
  ],
  imports: [],
  exports: [
    DefaultLoadableComponent
  ]
})
export class NggaLoadableModule { }
