import { Injectable } from '@angular/core';
import { CategoryDev } from '../category-dev/CategoryDev';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryDevService {

  private baseUrl = "http://localhost:8888";
  constructor(private _httpClient: HttpClient){}

  /** list category **/
  getCategoryDevs(): Observable<any>{
    return this._httpClient.get(this.baseUrl+'/start-app/api/category');
  }

  /** create category **/
  createCategory(categoryData: CategoryDev): Observable<any>{
    return this._httpClient.post(this.baseUrl+'/start-app/api/category', categoryData);
  }

  /** update category by id **/
  updateCategory(categoryId: number): Observable<any>{
    return this._httpClient.get(this.baseUrl+'/start-app/api/category/'+categoryId);
  }

  /** execute category update by id **/
  executeUpdateCategoryById(categoryData: CategoryDev): Observable<any>{
    return this._httpClient.put(this.baseUrl+'/start-app/api/category/'+categoryData.id, categoryData);
  }

}
