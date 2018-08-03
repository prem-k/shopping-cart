import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user.component';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { PagesComponent } from './pages/pages.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category.component';
import { AddProductComponent } from './products/add-product.component';

const routes: Routes = [
	{
		path : 'dashboard',
		component : DashboardComponent,
		children : 	[
			{ 
				path: '', 
				component : HomeComponent,
				data : {
					title : 'Dashboard'
				}
			},
			{ 
				path : 'home',
				component : HomeComponent,
				data : {
					title : 'Dashboard'
				} 
			},
			{ 
				path : 'login', 
				component : DashboardLoginComponent,
				data : {
					title : 'Login'
				}  
			},
			{ 
				path : 'users', 
				component : UsersComponent,
				data : {
					title : 'Users'
				} 
			},
			{ 
				path : 'users/add-user', 
				component : AddUserComponent,
				data : {
					title : 'User'
				} 
			},
			{ 
				path : 'category', 
				component : CategoryComponent,
				data : {
					title : 'Category'
				} 
			},
			{ 
				path : 'category/add-category', 
				component : AddCategoryComponent,
				data : {
					title : 'Category'
				} 
			},
			{ 
				path : 'products', 
				component : ProductsComponent,
				data : {
					title : 'Products'
				} 
			},
			{ 
				path : 'products/add-product', 
				component : AddProductComponent,
				data : {
					title : 'Products'
				} 
			},

			{ 
				path : 'orders', 
				component : OrdersComponent,
				data : {
					title : 'Orders'
				} 
			},
			{ 
				path : 'orders/add-order', 
				component : AddUserComponent,
				data : {
					title : 'Order'
				} 
			},

			{ 
				path : 'pages', 
				component : PagesComponent,
				data : {
					title : 'Pages'
				} 
			},
			{ 
				path : 'pages/add-page', 
				component : AddUserComponent,
				data : {
					title : 'Page'
				} 
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouteModule { } 

let dashboardRouteComponentArr:any = [];
for (let key in routes){
	if(routes[key].component){
		dashboardRouteComponentArr.push(routes[key].component);
		if(routes[key].children && routes[key].children.length > 0){
			for (let childKey in routes[key].children){
				dashboardRouteComponentArr.push(routes[key].children[childKey].component);
			}
		}
	}	
}
export const dashboardRoutingComponents = dashboardRouteComponentArr;
