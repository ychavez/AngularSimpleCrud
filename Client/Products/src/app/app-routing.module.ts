import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
//for default layout
  //   {
//   path: '',
//   component: AppComponent
// },

// {
//   path: 'accordion',
//   loadChildren: () => import('./+accordion/accordion.module').then(m => m.AccordionModule),
//   data: {
//     title: 'Accordion'
//   }
//}, 

  {path:'login', component:LoginComponent, pathMatch:'full'},

{
  path: 'products',
  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
  data: {
    title: 'Products',
  }
  
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
