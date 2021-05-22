import { NgModule } from '@angular/core';

import { DefaultLoaderComponent } from './loaders/default/default-loader.component';

import { LoadableComponent } from './loadables/base/loadable.component';
import { DefaultLoadableComponent } from './loadables/default-loadable.component';

@NgModule({
  declarations: [
    DefaultLoadableComponent,
    DefaultLoaderComponent,
    LoadableComponent
  ],
  imports: [],
  exports: [
    DefaultLoadableComponent
  ]
})
export class NggaLoadableModule { }
