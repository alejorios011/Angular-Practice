import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterProductComponent } from './components/forms/register-product/register-product.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent
  },
  {
    title: 'Products',
    path: 'products/list',
    component: ProductsComponent
  },
  {
    title: 'Products',
    path: 'products/register',
    component: RegisterProductComponent
  },
  {
    title: 'Products',
    path: 'products/details/:id',
    component: DetailsComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
