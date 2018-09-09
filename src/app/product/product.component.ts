import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../product/Product';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product/ProductService';
import { CategoryService } from '../category/CategoryService';
import { Observable } from 'rxjs';
import { Category } from '../category/Category';
/** modal service **/
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>
  newProduct: Product = new Product();
  editProduct: Product = new Product();
  modalRef: BsModalRef;

  categorys=[];

  constructor(
    private _productService: ProductService,
    private _categoryService: CategoryService,
    private _modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getProductComponentList()
    this.getCategoryComponent()
  }

  /** create new product **/
  createNewProduct(productForm: NgForm){
    this._productService.createNewProduct(this.newProduct)
      .subscribe(data => {
        this.getProductComponentList();
        this.newProduct = new Product();
      }, error => {
        /** definisikan error berdasarkan status request **/
        if(error.status == 500){
          alert('internal server error');
        }else if(error.status == 400){
          alert('bad request')
        }else{
          alert('error '+error);
        }
      });
  }

  /** show modal **/
  showModal(showTemplate: TemplateRef<any>){
      this.modalRef = this._modalService.show(
        showTemplate, Object.assign({}, {class : 'gray modal-lg'})
      );
  }

  /** get or show product by id **/
  showProductById(productId: number, showTemplate: TemplateRef<any>){
    this.showModal(showTemplate);
    this._productService.getProductById(productId)
      .subscribe(data => {
        this.editProduct = {
          id: data.id,
          name: data.name,
          price: data.price,
          stock: data.stock,
          category: data.category,
          categoryId: data.category.id
        }, console.log(data)
      }, error => console.log(error))
  }


  getCategoryComponent(){
    this._categoryService.getCategoryList()
    .subscribe(data => this.categorys = data, error => console.error(error));
  }

  getProductComponentList(){
    this.products = this._productService.getProductList();
  }
}
