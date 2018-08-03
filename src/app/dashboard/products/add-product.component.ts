import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public form:any = {};

  constructor(private apiService : ApiService ) {
    this.form.parent_category = 0;
    this.form.status = 0;
    this.form.type = 2;
    this.form.gender = 'male';
  }

  ngOnInit() {
    this.categoryList('');
  }

  categoryList(){
    let request = this.apiService.categoryList();
    this.apiService.submitRequest(request).subscribe( (res:any) => {
      this.parentCategoryList =  res.json();
    });
  }

  saveData(){
    this.form.errors = {};
    let request = this.apiService.addProduct();
    request.data = this.form;
    this.apiService.submitRequest(request).subscribe( (res:any) => {
      var data = res.json();
      if(data.status == false){
        this.form.errors = data.errors;
        console.log('df');
      }
    });
  }

}
