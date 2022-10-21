import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ConfigServiceService } from '../../services/config-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  isSubmitted = false;
  JsonData : "";
  
  constructor(public formBuilder: FormBuilder, private ConfigServiceService: ConfigServiceService) { }

  submitForm() {
    this.isSubmitted = true;
    if (!this.signupForm.valid){
      console.log('Please provide all the required values!')
      return false;
    } 
    else {
      console.log(this.signupForm.value)
      this.JsonData = this.signupForm.value
      this.ConfigServiceService.RegisterJsonData(this.JsonData).subscribe(
        (response: any) => { alert(JSON.stringify(response));
        },
        (error)=>{
          alert(JSON.stringify(error));
      });
    }
  }

  get errorControl() {
    return this.signupForm.controls;
  }

  ngOnInit() {
    this.signupForm =  this.formBuilder.group({
      name :['',[
        Validators.required,
        Validators.minLength(4),
      ]],
      email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password:['',[Validators.required,
        Validators.minLength(6)]],
      mobile:['',[Validators.required,
              Validators.minLength(10),
            Validators.maxLength(11), Validators.pattern('^[0-9]+$')]],
    });

  }


}
