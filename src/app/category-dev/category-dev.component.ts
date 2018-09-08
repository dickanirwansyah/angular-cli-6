import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoryDev } from '../category-dev/CategoryDev';
import { CategoryDevService } from '../category-dev/CategoryDevService';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-category-dev',
  templateUrl: './category-dev.component.html',
  styleUrls: ['./category-dev.component.css']
})
export class CategoryDevComponent implements OnInit {

  modalRef: BsModalRef;
  categoryDevs: CategoryDev[];
  newCategoryDev: CategoryDev = new CategoryDev();
  editingCategoryDev: CategoryDev = new CategoryDev();

  /** option select **/
  selectStatus = [
    {
      id : true,
      value : "OKE"
    },
    {
      id : false,
      value : "NOT OKE"
    }
  ];

  constructor(
    private _categoryDevService: CategoryDevService,
    private _modalService: BsModalService
  ) { }

  openModal(template: TemplateRef<any>){
    this.modalRef = this._modalService.show(
      template, Object.assign({}, {class: 'gray modal-lg'})
    );
  }

  editModal(templateUpdate: TemplateRef<any>) {
    this.modalRef = this._modalService.show(
      templateUpdate, Object.assign({}, {class: 'gray modal-lg'})
    );
  }

  executeUpdateCategory(categoryForm: NgForm){
    this._categoryDevService.executeUpdateCategoryById(this.editingCategoryDev)
      .subscribe(data => {
        this.modalRef.hide();
        this.getCategoryDevs();
        this.editingCategoryDev = new CategoryDev();
        this.categoryDevs.unshift(data);
      });
  }

  createCategory(categoryForm: NgForm){
    this._categoryDevService.createCategory(this.newCategoryDev)
    .subscribe(data => {
      this.modalRef.hide();
      this.getCategoryDevs();
      this.newCategoryDev = new CategoryDev();
      this.categoryDevs.unshift(data);
    });
  }

  updateCategoryById(categoryId: number, templateUpdate: TemplateRef<any>){
    this.editModal(templateUpdate);
    this._categoryDevService.updateCategory(categoryId)
      .subscribe(data => {
        this.editingCategoryDev = {
          id: data.id,
          name: data.name,
          status: data.status
        },console.log(data)
      }, error => console.log(error));
  }

  ngOnInit() {
    this.getCategoryDevs();
  }

  getCategoryDevs(){
    return this._categoryDevService.getCategoryDevs()
    .subscribe(categoryDevs => this.categoryDevs = categoryDevs)
  }

}
