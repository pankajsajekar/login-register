import { Component } from '@angular/core';
import { ConfigServiceService } from '../services/config-service.service'
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users : any;

  constructor(private ConfigServiceService: ConfigServiceService,
     private route: Router,
     private tokenService: TokenService ) {}

  ngOnInit(){
  }

  postreq(){
    console.log("postreq"); 
    this.ConfigServiceService.getUsers().subscribe((response)=> { 
      console.log(response); 
      this.users = response;
    });
    // this.route.navigate(['/profile']);
  }

  logout(){
    this.tokenService.signOut();
  }

}
