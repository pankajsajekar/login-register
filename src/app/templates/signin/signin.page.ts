import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  
  signinForm : FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({

      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['',[Validators.required]]

    })
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.signinForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.signinForm.value)
    }
  }

  get errorControl() {
     return this.signinForm.controls;
  } 

}
