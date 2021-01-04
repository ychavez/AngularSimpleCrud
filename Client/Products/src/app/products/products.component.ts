import { Component, OnInit } from '@angular/core';
import { product } from '../_models/product';
import { DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: product[];

  constructor(service: ProductService) {
    service.getProducts().subscribe(products => {
      this.products = products
    });
  }

  helloWorld() {
    alert('Hello world!');
  }
  ngOnInit(): void {
  }

}
