import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import { Customer, Service } from './yaeliyo.service';


@Component({
  selector: 'app-yaelito',
  templateUrl: './yaelito.component.html',
  styleUrls: ['./yaelito.component.css'],
  providers: [Service]
})
export class YaelitoComponent implements OnInit {

  customers: Customer[];

  constructor(service: Service) {
      this.customers = service.getCustomers();
  }

  ngOnInit() {
  }
  helloWorld() {
    alert('Hello world!');
}
}
