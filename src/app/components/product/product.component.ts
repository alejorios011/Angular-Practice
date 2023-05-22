import { Component, Input } from '@angular/core';
// Importamos la interfaz que creamos para los productos
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  /**
   * * El input es el equivalente a lo que en React se considera un prop, pero primero siempre debe importarse 
   * Nota para mi: el "product!", el signo de admiración al final le dice a ts que no se preocupe por inicializar el valor, que puede confiar en que se le va a enviar un valor
   * */ 
  @Input() product!: Product;
}
