import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YaelitoComponent } from './yaelito.component';


const routes: Routes = [{
  path: '',
  component: YaelitoComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YaelitoRoutingModule { }
