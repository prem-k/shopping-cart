import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ThreeColumnComponent } from './three-column/three-column.component';
import { FourColumnComponent } from './four-column/four-column.component';
import { GeneralContentComponent } from './general-content/general-content.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyAccountComponent } from './my-account/my-account.component';


const routes : Routes = [
	{
		path : 'home',
		component : HomeComponent
	},
	{
		path : 'register',
		component : RegisterComponent
	},
	{
		path : 'login',
		component : LoginComponent
	},
	{
		path : 'contact-us',
		component : ContactUsComponent
	},
	{
		path : 'my-cart',
		component : MyCartComponent
	},
	{
		path : 'my-account',
		component : MyAccountComponent
	},
	{
		path : 'list-view',
		component : ListViewComponent
	},
	{
		path : 'grid-view',
		component : GridViewComponent
	},
	{
		path : 'three-column',
		component : ThreeColumnComponent
	},
	{
		path : 'four-column',
		component : FourColumnComponent
	},
	{
		path : 'general-content',
		component : GeneralContentComponent
	},
	{
		path : 'products',
		component : GridViewComponent
	},
	{
		path : 'product-details',
		component : ProductDetailsComponent
	},	
	{ 	
		path: '', 
		redirectTo: 'home', 
		pathMatch: 'full' 
	}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports : [
	RouterModule,
	BrowserModule
  ],
  declarations: []
})
export class AppRoutesModule { };

let routeComponentArr:any = [];
for (let key in routes){
	if(routes[key].component){
		routeComponentArr.push(routes[key].component);
		if(routes[key].children && routes[key].children.length > 0){
			for (let childKey in routes[key].children){
				routeComponentArr.push(routes[key].children[childKey].component);
			}
		}
	}	
}
export const routingComponents = routeComponentArr;
