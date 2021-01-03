import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YaelitoComponent } from './yaelito.component';
import { YaelitoRoutingModule } from './yaelito-routing.module';
import { DxButtonModule } from 'devextreme-angular';


@NgModule({
  imports: [
    CommonModule,
    YaelitoRoutingModule,
    DxButtonModule
  ],
  declarations: [YaelitoComponent]
})
export class YaelitoModule { }
