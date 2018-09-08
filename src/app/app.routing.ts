import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryDevComponent } from './category-dev/category-dev.component';


export const router: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'category-dev', component: CategoryDevComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
