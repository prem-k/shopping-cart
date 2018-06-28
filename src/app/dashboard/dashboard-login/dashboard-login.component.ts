import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.css']
})
export class DashboardLoginComponent implements OnInit {

  	constructor( private apiService : ApiService ) {

  	}

  	ngOnInit() {
  	
  	}

  	login(){

  		var submitRequest = this.apiService.login();
  		console.log('submitRequest',submitRequest);

  	}

}
