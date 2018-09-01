import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class DashbordService {
	userData: any;
  	constructor( public http: HttpClient) {

  	}

 	public createRemeady(data){
  		const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  		return this.http.post('http://localhost:3000/createRemedy', JSON.stringify(data), {responseType: 'json'});  	
  	
 	}

 	public getRemedy(){
  		return this.http.get('http://localhost:3000/getUserData', {responseType: 'json'});    	
 	}

 	public removeDetails(id){
 		return this.http.post('http://localhost:3000/removeRecord',JSON.stringify(id), {responseType: 'json'});
 	}


}

