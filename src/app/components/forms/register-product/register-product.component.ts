import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {

  // Declaramos el formulario como tipo FormGroup
  formProducts: FormGroup;

  // Instanciamos un producto
  product: Product = new Product();

  constructor(private formBuilder: FormBuilder){
    // Se utiliza el método group() para crear los controles de formProducts.
    this.formProducts = this.formBuilder.group({
      name: [this.product.title, [
        // De esta forma se pueden agregar validaciones a los formControls
        Validators.required,
        Validators.minLength(4)
      ]],
      price: [this.product.price, Validators.required],
      description: [this.product.description, Validators.required],
      image: [this.product.images],
    });
  }

  // El método onSubmit() captura el valor actual de formProducts
  onSubmit(){
    if (this.formProducts.valid) {
      // Procesar el formulario cuando es válido
      console.log(this.formProducts.value);
    } else {
      // Mostrar mensajes de error o realizar acciones cuando el formulario es inválido
      console.log('Formulario inválido. Revise los campos.');
    }
  }

  // Esta función nos devuelve los FormControls para utilizarlos en las validaciones
  get registerFormControl() {
    return this.formProducts.controls;
  }
}
