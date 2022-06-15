import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { NotFoundComponent } from './_commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import {ButtonModule} from 'primeng/button';

import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import { ProductListComponent } from './pages/product-page/product-list/product-list.component';
import { ProductCardComponent } from './pages/product-page/product-card/product-card.component';


import {TabMenuModule} from 'primeng/tabmenu';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    TabMenuModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
