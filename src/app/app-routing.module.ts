import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VisitorGuard } from './security/guards/visitor.guard';
import { LoginFormComponent } from './login/components/login-form/login-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'start', component: GettingStartedComponent, canActivate: [VisitorGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
