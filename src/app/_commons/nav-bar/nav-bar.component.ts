import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem =  this.items[0];
  constructor() { }

 

  ngOnInit() {
      this.items = [
          {
              label:'Médiathèque',
          },
          {
            label:'Home',
            url: "home"
          }, 
          {
            label:'Products',
            url: "products"

          }       
      ]
    }

    onclick(event: any){
      console.log(event);
      
    }
}
