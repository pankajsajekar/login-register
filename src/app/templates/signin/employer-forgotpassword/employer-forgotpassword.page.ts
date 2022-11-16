import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigServiceService } from '../../../services/config-service.service';

@Component({
  selector: 'app-employer-forgotpassword',
  templateUrl: './employer-forgotpassword.page.html',
  styleUrls: ['./employer-forgotpassword.page.scss'],
})
export class EmployerForgotpasswordPage implements OnInit {
  
  forgotPassForm: FormGroup;
  JsonData : "";

  constructor(private route: Router, private FormBuilder: FormBuilder, private ConfigServiceService: ConfigServiceService) { }

  submitForm(){
    this.JsonData = this.forgotPassForm.value
    console.log(this.JsonData);
    if (!this.forgotPassForm.value){
      console.log('Please provide all the required values!')
      alert('Please provide all the required values!');
      return false;
    }
    else{
      console.log(this.JsonData);
      this.ConfigServiceService.ResendPasswordJsonData(this.JsonData).subscribe(
        (response: any) => {
          this.route.navigate(['/signin/elogin/']);
          alert(JSON.stringify(response));
        },
        (error) => {
          alert(JSON.stringify(error));
        }
      )
    }
  }
  
  close(){
    this.route.navigate(['/signin/empoyer-login/']);
  }

  get errorControl(){
    return this.forgotPassForm.controls;
  }

  ngOnInit() {
    this.forgotPassForm = this.FormBuilder.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }


}
