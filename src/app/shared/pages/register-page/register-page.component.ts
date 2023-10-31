import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [
    './register-page.component.css'
  ]
})

export class RegisterPageComponent {

  constructor(private registerService : RegisterService, private router : Router){}

  showToast: boolean = false;
  errorTitle : string = 'Register Failed';
  errorMessage : string = 'Verify if you already have an account with the provided email. Also, the password should contains 1 number and at least one special character.'
  email: string = '';
  password: string = '';

  register() : void {
    this.registerService.register(this.email, this.password)
      .subscribe( token => {
        this.router.navigate(['login']);
      },
      error => {
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 5000);
      });;
  }
}
