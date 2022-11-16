import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigServiceService } from '../../services/config-service.service';

@Component({
  selector: 'app-resendpasswordemail',
  templateUrl: './resendpasswordemail.page.html',
  styleUrls: ['./resendpasswordemail.page.scss'],
})
export class ResendpasswordemailPage implements OnInit {

  resendPasswordFrom: FormGroup;
  JsonData: "";

  constructor(private route: Router, public formBuilder: FormBuilder,
   private ConfigServiceService: ConfigServiceService) { }


  submitForm() {
    if (!this.resendPasswordFrom.valid){
      console.log('Please provide all the required values!')
      return false;
    } 
    else {
      console.log(this.resendPasswordFrom.value)
      this.JsonData = this.resendPasswordFrom.value
      this.ConfigServiceService.ResendPasswordJsonData(this.JsonData).subscribe(
        (response: any) => {
          alert(JSON.stringify(response));
          this.route.navigate(['signin']);
          this.resendPasswordFrom.reset();
        },
        (error)=>{
          alert(JSON.stringify(error));
      });
    }
  }

  get errorControl() {
    return this.resendPasswordFrom.controls;
  }
  ngOnInit() {
    this.resendPasswordFrom = this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }
  
  close(){
    this.route.navigate(['/signin']);
  }
}
