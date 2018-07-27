import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
		'./dashboard.component.css',
		'./css/bootstrap.min.css',
		'./css/theme.css',
		'./css/font-awesome-4.7/css/font-awesome.min.css',
		'./css/font-awesome-5/css/fontawesome-all.min.css',
    './css/style.css'
  	],
  encapsulation: ViewEncapsulation.None  
})
export class DashboardComponent implements OnInit {

  public pageTitle:any = '';
  constructor(public router:Router, public activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {

  }

  changeOfRoutes(){    
    this.router.events
   // .filter((event: any) => event instanceof NavigationEnd)
    .subscribe(() => {
        var root = this.router.routerState.snapshot.root;
        while (root) {
            if (root.children && root.children.length) {
                root = root.children[0];
            } else if (root.data && root.data["title"]) {
                this.pageTitle = root.data["title"];
                return;
            } else {
                return;
            }
        }
    });        
  }

  getTitle(){
    return this.pageTitle;
  }

}
