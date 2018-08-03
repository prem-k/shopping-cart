import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

	public navData:any = [];

	constructor() { 

		this.navData = [
				{
					name : 'Dashboard',
					className : 'fas fa-tachometer-alt',
					link : '/dashboard/home'
				},
				{
					name : 'Users',
					className : 'fas fa-table',
					link : 'users'
				},
				{
					name : 'Category',
					className : 'fa fa-list-ol',
					link : 'category'
				},
				{
					name : 'Products',
					className : 'fas fa-chart-bar',
					link : 'products'
				},
				{
					name : 'Orders',
					className : 'fas fa-desktop',
					link : 'orders'
				},
				{
					name : 'Pages',
					className : 'fas fa-copy',
					link : 'pages'
				},
			];

	}

	ngOnInit() {

	}


}
