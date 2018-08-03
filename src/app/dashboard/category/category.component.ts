import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	public usersData:any = {};
	constructor(private apiService : ApiService) { }

	ngOnInit() {
		this.categoryList('');
	}

	categoryList(search){
		let request = this.apiService.categoryList();
		if(search && search.length > 0){
			request.search.key = search;
		}
		this.apiService.submitRequest(request).subscribe( (res:any) => {
			this.usersData =  res.json();
		});
	}

}
