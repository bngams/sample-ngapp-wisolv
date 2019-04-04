import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';

const routes: Routes = [
  { path: '', component: ProductDashboardComponent }
  // ...
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductsRoutingModule { }
