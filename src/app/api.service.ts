import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

	public baseUrl : any = '';

  	constructor(private configService : ConfigService) {
  		this.baseUrl = configService.apiUrl;
  	}

  	submitRequest(aRequest){        
		
		if(aRequest.method === 'POST'){
			//let headers  = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
			let headers  = new Headers({ 'token': this.getToken()});
			let options  = new RequestOptions({ 
									headers: headers,
									search : Object.assign({},aRequest.search) 
							}); // Create a request option
			let body = JSON.stringify(aRequest.data);
			return this.http.post(aRequest.url, body, options);
		}else{
			return this.http.get(aRequest.url,aRequest.data);
		}
        
    }

    login(){
		return {
			url: this.baseUrl+'/user-login',
			method : 'POST',
			dataType: 'json',
			search : {
				search : '',
				offset : 0,
				limit : this.pageLimit	
			},
			data: {
				'email' : '',
				'password' : ''
				
			}
		};
	};
}
