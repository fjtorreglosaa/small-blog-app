import { Component } from '@angular/core';
import { TokenService } from './shared/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private tokenService : TokenService){
    console.log(this.token)
  }

  get token(){
    return this.tokenService.getToken();
  }

  title = 'small-blog-app';
}
