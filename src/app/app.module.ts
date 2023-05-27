import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para hacer peticiones http, no olvidar agregarlo a la sección de imports
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

/**
 * Normalmente queremos que el usuario visualize las imagenes a medida que va haciendo scroll en la página,
 * no tiene sentido cargar todas las imagenes si no sabemos si el usuario va a visualizarlas todas. 
 * Por eso, en Angular se creo un componente para hacer optimización de imagenes, vamos a importar ese componente.
 */
import { NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { RegisterProductComponent } from './components/forms/register-product/register-product.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // Product Component
    ProductComponent,
    // Products Page
    ProductsComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    RegisterProductComponent,
    DetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
