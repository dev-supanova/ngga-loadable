import { NgModule } from '@angular/core';

import { DefaultLoaderComponent } from './loaders/default/default-loader.component';

import { LoadableComponent } from './loadables/base/loadable.component';
import { DefaultLoadableComponent } from './loadables/default-loadable.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DefaultLoadableComponent,
    DefaultLoaderComponent,
    LoadableComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DefaultLoadableComponent
  ]
})
export class NggaLoadableModule { }
