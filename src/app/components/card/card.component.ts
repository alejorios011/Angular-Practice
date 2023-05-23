import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image: string = "";
  @Input() title: string= "";
  @Input() description: string = "";
  @Input() price!:number;
  // Si no se envia nada al boton, este no se mostrara
  @Input() buttonTitle: string = "";
}
