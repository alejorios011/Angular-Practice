import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  // Creamos una variable de tipo FormGroup
  registerForm!: FormGroup;
  // Esta variable nos servira para algunas validaciones
  submitted = false;
  // Import the FormBuilder class from the @angular/forms package.
  constructor(private fb: FormBuilder) { }

  /**
   * En el método ngOnInit definiremos los controles del formulario usando la clase FormBuilder 
   */
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      price: ['', Validators.required],
      description: ['', Validators.required],
      images: [''],
    });
  }

  // Esta función nos devuelve los FormControls para utilizarlos en las validaciones
  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    // Validamos si el formulario es valido y es enviado exitosamente
    if(this.registerForm.valid){
      let newProduct: Product = new Product(
        String(this.registerForm.value.name), 
        Number(this.registerForm.value.price),
        String(this.registerForm.value.description),
        String(this.registerForm.value.images)
      )
      console.log(newProduct);
      console.table(this.registerForm.value);
    }
  }
}
