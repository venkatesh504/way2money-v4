import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsRoutingModule } from './common-components-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [TopNavComponent],
  imports: [
    CommonModule,
    CommonComponentsRoutingModule
  ],
  exports: [
    TopNavComponent
  ]
})
export class CommonComponentsModule { }
