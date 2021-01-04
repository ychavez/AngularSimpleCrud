import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import { product } from '../_models/product';
import { ProductService } from '../_services/product.service';



@Component({
  selector: 'app-yaelito',
  templateUrl: './yaelito.component.html',
  styleUrls: ['./yaelito.component.css']
})
export class YaelitoComponent implements OnInit {

  products: product[];

  constructor(service: ProductService) {
      service.getProducts().subscribe(products =>{
        this.products = products
      });
  }

  ngOnInit() {
  }
  helloWorld() {
    alert('Hello world!');
}
}
