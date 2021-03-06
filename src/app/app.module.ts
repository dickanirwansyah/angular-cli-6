import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routing';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CategoryDevComponent } from './category-dev/category-dev.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    HomeComponent,
    CategoryDevComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
