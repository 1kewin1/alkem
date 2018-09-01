import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashbordService } from '../services/dashbord.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	CreateremedyForm: FormGroup;
  submitted:any =false;  
  user:any={};
  userData:any={};
  recordUpdated: boolean=false;
  	constructor(private formBuilder : FormBuilder, public dashbordService : DashbordService) {
  		 	
  	};	

 	ngOnInit() {
  		this.CreateremedyForm = this.formBuilder.group({            
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            seat: ['', [Validators.required]],
            department: ['', [Validators.required]],            
            comment: ['', [Validators.required]]          
        });
  	}
  get f() { return this.CreateremedyForm.controls; } 

  onSubmit(){
      this.submitted=true;
      console.log('hi this is submitted request');
      if (this.CreateremedyForm.valid) {
           //console.log(this.CreateremedyForm.controls);
          this.user.username = this.f.username.value;
          this.user.email = this.f.email.value;
          this.user.seat = this.f.seat.value;
          this.user.department = this.f.department.value;
          this.user.comment = this.f.comment.value;          
          console.log(this.user);
          this.dashbordService.createRemeady(this.user)
          .subscribe(
              res => {this.userData = Array.of(res); }, // <= HERE
              error => console.log('Error from backend API', +error),
              () => console.log(this.recordUpdated = true, this.CreateremedyForm.reset(), this.submitted=false)
        );

       // this.ngOnInit();    
      }
  }
}
