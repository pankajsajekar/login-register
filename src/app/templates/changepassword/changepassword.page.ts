import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigServiceService } from '../../services/config-service.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  changepasswordForm: FormGroup;
  JsonData: "";

  constructor(private route: Router, public formBuilder: FormBuilder,
   private ConfigServiceService: ConfigServiceService, ) { }

  submitForm() {
    if (!this.changepasswordForm.valid){
      console.log('Please provide all the required values!')
      return false;
    } 
    else {
      console.log(this.changepasswordForm.value)
      this.JsonData = this.changepasswordForm.value
      this.ConfigServiceService.ChangePasswordJsonData(this.JsonData).subscribe(
        (response: any) => {
          this.changepasswordForm.reset();
          this.route.navigate(['home']);
          alert(JSON.stringify(response));
        },
        (error)=>{
          alert(JSON.stringify(error));
      });
    }
  }

  get errorControl() {
    return this.changepasswordForm.controls;
  }

  ngOnInit() {
    this.changepasswordForm = this.formBuilder.group({
      password: ['',[Validators.required]],
      password2: ['',[Validators.required]],
    })
  }

  close(){
    this.route.navigate(['home'])
  }

}
