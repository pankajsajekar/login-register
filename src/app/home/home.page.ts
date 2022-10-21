import { Component } from '@angular/core';
import { ConfigServiceService } from '../services/config-service.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users : any;

  constructor(private ConfigServiceService: ConfigServiceService) {}

  ngOnInit(){
  }

  postreq(){
    console.log("postreq"); 
    this.ConfigServiceService.getUsers().subscribe((response)=> { 
      console.log(response); 
      this.users = response;
    });
  }

}
