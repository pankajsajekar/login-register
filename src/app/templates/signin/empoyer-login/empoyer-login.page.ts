import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigServiceService } from '../../../services/config-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-empoyer-login',
  templateUrl: './empoyer-login.page.html',
  styleUrls: ['./empoyer-login.page.scss'],
})
export class EmpoyerLoginPage implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  JsonData: "";

  constructor(private route: Router, public formBuilder: FormBuilder, private ConfigServiceService: ConfigServiceService, private TokenService: TokenService ) { }

  submitForm(){
    this.isSubmitted = true;
    this.JsonData = this.loginForm.value
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    }
    else {
      console.log('correct values!', this.JsonData)
      this.ConfigServiceService.EmployerLoginJsonData(this.JsonData).subscribe(
        (response: any) => {
        // alert(JSON.stringify(response));
        // localStorage.setItem('token', JSON.stringify(response.token.access));
        this.TokenService.saveToken(response.token.access);
        this.loginForm.reset();
        this.route.navigate(['profile']);
        },
        (error)=>{
          alert(JSON.stringify(error));
      }
      );
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['',[Validators.required]],
      user_type: ['true', Validators.required]
    })
  }

  get errorControl() {
     return this.loginForm.controls;
  } 


  goforgotpassword(){
    this.route.navigate(['/signin/employer-forgotpassword']);
  }




}
