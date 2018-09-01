import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashbordService } from '../services/dashbord.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  	remedyForm: FormGroup;
    submitted = false;
    user: any={};
    userData:any = [];
    remedyList:any = [];
    recordUpdated: boolean= false;

	constructor(private formBuilder : FormBuilder, public dashbordService : DashbordService) { }

	ngOnInit() {
	    this.remedyForm = this.formBuilder.group({            
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        /**
  		* getRemedy function for retrieving remedy details from database.
  		**/
  		this.dashbordService.getRemedy().subscribe(
  			res=> {this.remedyList = res; },
  			error => { console.log('Error from backend API', +error) },
	        () => console.log(this.remedyList)
  		); 
	}

	get f() { return this.remedyForm.controls; } 
    /**
  	* onSubmit function for login and then redirect ro specific page.
  	**/
   onSubmit() {
        this.submitted = true; 
        // stop here if form is invalid
        if (this.remedyForm.invalid) {
            return;
        }
        else if(this.remedyForm.valid){
        	this.user.email = this.f.email.value;
        	this.user.password = this.f.password.value;
        	console.log(this.user);
        	this.dashbordService.createRemeady(this.user)
        	.subscribe(
	            res => {this.userData = Array.of(res); }, // <= HERE
	            error => console.log('Error from backend API', +error),
	            () => console.log(this.recordUpdated = true)
    		);
    		this.ngOnInit();        	
        }         
    }

    removeRemedy(id){
    	console.log('I am in onclick removeRemedy');
    	this.dashbordService.removeDetails(id)
    	.subscribe(
    		res => {console.log(res)},
    		error => console.log('Error from backend API', +error),
	        () => console.log(this.recordUpdated = true)
    	);
    	this.ngOnInit();
    }

}
