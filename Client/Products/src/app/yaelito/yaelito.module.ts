import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YaelitoComponent } from './yaelito.component';
import { YaelitoRoutingModule } from './yaelito-routing.module';



@NgModule({
  imports: [
    CommonModule,
    YaelitoRoutingModule
  ],
  declarations: [YaelitoComponent]
})
export class YaelitoModule { }
