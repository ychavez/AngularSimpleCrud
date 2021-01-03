import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
//for default layout
  //   {
//   path: '',
//   component: AppComponent
// },

{
  path: 'accordion',
  loadChildren: () => import('./+accordion/accordion.module').then(m => m.AccordionModule),
  data: {
    title: 'Accordion'
  }
}, {
  path: 'alert',
  loadChildren: () => import('./+alert/alert.module').then(m => m.AlertModule),
  data: {
    title: 'Alert',
  }
},
{
  path: 'yaelito',
  loadChildren: () => import('./yaelito/yaelito.module').then(m => m.YaelitoModule),
  data: {
    title: 'Yaelito',
  }
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
