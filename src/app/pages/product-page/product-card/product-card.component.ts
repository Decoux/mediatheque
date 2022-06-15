import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() data: any;

  noPicture: string = "../../../assets/No-Image-Placeholder.svg.png"
  constructor() { }

  ngOnInit(): void {
  }

}
