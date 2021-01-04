import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule } from 'devextreme-angular';
import { ProductsComponent } from './products.component';



@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxCheckBoxModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
