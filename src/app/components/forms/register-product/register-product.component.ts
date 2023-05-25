import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  product: Product = {
    id: Math.floor(Math.random() * 100),
    title: '',
    price: 0,
    description: '',
    images: []
  };

  enviarDatos(){
    console.log(this.product);
  }
}
