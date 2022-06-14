import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

 

  ngOnInit() {
      this.items = [
          {
              label:'Médiathèque',
          },
          {
            label:'Home',
          }, 
          {
            label:'Products',
          }       
      ]
    }

    onclick(event: any){
      console.log(event);
      
    }
}
