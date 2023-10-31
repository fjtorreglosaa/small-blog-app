import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [
    './login-page.component.css'
  ]
})
export class LoginPageComponent {

  constructor( private authservice : AuthService, private router : Router ) {}

  email: string = '';
  password: string = '';
  showToast: boolean = false;
  errorTitle : string = 'Login Failed';
  errorMessage : string = 'Email or Password Incorrect.'

  login(): void {
    this.authservice.login(this.email, this.password)
      .subscribe(
        token => {
          this.router.navigate(['/']);
        },
        error => {
          this.showToast = true;
          setTimeout(() => {
            this.showToast = false;
          }, 5000);
        }
      );
  }


  register() : void {
    this.router.navigateByUrl('register');
  }
}
