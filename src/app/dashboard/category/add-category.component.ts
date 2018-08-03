import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
	
	public form:any = {};
	public parentCategoryList : any = [];

	constructor(private apiService : ApiService ) {
		this.form.parent_category = 0;
		this.form.status = 1;
	}

	ngOnInit() {
		this.categoryList();
	}

	categoryList(){
		let request = this.apiService.categoryList();
		this.apiService.submitRequest(request).subscribe( (res:any) => {
			this.parentCategoryList =  res.json();
		});
	}

	saveData(){

	    this.form.errors = {};
	    let request = this.apiService.addCategory();
	    request.data = this.form;
	    this.apiService.submitRequest(request).subscribe( (res:any) => {
	      var data = res.json();
	      if(data.status == false){
	        this.form.errors = data.errors;
	      }
    	});
  	}

}
