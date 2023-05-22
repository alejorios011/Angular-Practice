import { Component, inject } from '@angular/core';
/**
   * Angular al ser un framework, ya trae algunas cosas por defecto como por ejemplo una forma 
   * de hacer peticiones a una API o para conectarnos por el protocolo http. 
   * Sin embargo primero hay que habilitarlo en app.module.ts para poder usarlo en cualquier componente.
*/
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  /**  
   * Esto utiliza el patron de inyeccion de dependencias que nos permite utilizar una 
   * instancia con el patron singleton hacia toda nuestra aplicacion
   * */
  http = inject(HttpClient);
  productsList: Product[] = [];

  /**
   * Al igual que en React, en Angular los componentes también tienen un ciclo de vida, aqui tenemos un método
   * que es un trigger para decir cuando el componente ya esta renderizado.
   */
  ngOnInit(){
    /**
     * Aqui no tenemos una promise si no un observable y en ves de un .then, 
     * se hace un .subscribe que es similar a resolver una promesa.
     */
    this.http.get<Product[]>("https://api.escuelajs.co/api/v1/products").subscribe((data) => {
      this.productsList = data;
    });
  }
}
