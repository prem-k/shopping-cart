import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navLinks:any = [];

  constructor() {

  }

  ngOnInit() {

  	this.navLinks = [
	  	{
	  		title : 'Home',
	  		url : 'home',
	  	},
	  	{	
	  		title : 'List View',
	  		url : 'list-view',
	  	},
	  	{	
	  		title : 'Grid View',
	  		url : 'grid-view',
	  	},
	  	{	
	  		title : 'Three Column',
	  		url : 'three-column',
	  	},
	  	{	
	  		title : 'Four Column',
	  		url : 'four-column',
	  	},
	  	{	
	  		title : 'General Content',
	  		url : 'general-content',
	  	}
  	];

  }

}
