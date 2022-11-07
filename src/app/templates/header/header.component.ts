import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private tokenService: TokenService, private route:Router) { }

  ngOnInit() {
  }

  logout(){
    this.tokenService.signOut();
    this.route.navigate(['/signin'])
  }


}
