import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../../../services/config-service.service';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-empoyer-register',
  templateUrl: './empoyer-register.page.html',
  styleUrls: ['./empoyer-register.page.scss'],
})
export class EmpoyerRegisterPage implements OnInit {

  constructor(private ConfigServiceService: ConfigServiceService, public route: Router, private FormBuilder: FormBuilder) { }

  registerForm : FormGroup;
  JsonData: ""
  isSubmitted = false;

  submitForm(){
    this.JsonData = this.registerForm.value;
    this.isSubmitted = true;
    if(!this.registerForm.valid){
      console.log('Please provide all the required values!')
      return false;
    }
    else{
      console.log(this.JsonData);
      this.ConfigServiceService.EmployerRegisterJsonData(this.JsonData).subscribe(
        (response: any) => {          
        alert(JSON.stringify(response));
        this.registerForm.reset();
        this.route.navigate(['/signin/elogin/'])
        },
        (error) => {
          alert(JSON.stringify(error));
        }
        );
    }
  }

  ngOnInit() {
    this.registerForm = this.FormBuilder.group({
      name :['',[Validators.required,Validators.minLength(4),]],
      email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password:['',[Validators.required,Validators.minLength(6)]],
      password2:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(14)]],
      is_employer: ['true', Validators.required]
    })
  }

   get errorControl() {
     return this.registerForm.controls;
  } 


}
