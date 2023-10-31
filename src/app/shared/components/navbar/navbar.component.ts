import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css'
  ]
})

export class NavbarComponent {

  constructor(private authService : AuthService, private router : Router){

  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl('login')
  }
}
