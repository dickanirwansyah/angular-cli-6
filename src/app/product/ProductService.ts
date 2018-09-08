import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDev } from '../category-dev/CategoryDev';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private baseUrl = "http://localhost:8888/start-app";

  constructor(private _httpClient: HttpClient){}

  /** get list product **/
  getProductList():Observable<any>{
    return this._httpClient.get(this.baseUrl+'/api/product');
  }

  /** create new product **/
  createNewProduct(dataProduct: Product): Observable<any>{
    return this._httpClient.post(this.baseUrl+'/api/product/'+dataProduct.categoryId, dataProduct);
  }

}
