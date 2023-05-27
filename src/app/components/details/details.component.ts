import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  // Aqui nosotros injectamos el ActivatedRoute class que contiene la información acerca de nuestra actual ruta
  private route = inject(ActivatedRoute);
  productId: number = 0;
  
  http = inject(HttpClient);
  product!: Product;

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param["id"];
    })
    this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${this.productId}`).subscribe((data) => {
      this.product = data;
    });
  }
}
