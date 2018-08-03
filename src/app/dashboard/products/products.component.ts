import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	productsData<any>;

	constructor(private apiService : ApiService) { }

	ngOnInit() {
		this.products('');
	}

	products(search){
		let request = this.apiService.products();
		if(search && search.length > 0){
			request.search.key = search;
		}
		this.apiService.submitRequest(request).subscribe( (res:any) => {
			this.productsData =  res.json();
		});
	}

}
