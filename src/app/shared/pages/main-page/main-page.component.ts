import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
    `
      img {
        height: 400px;
        width: 400px;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }
    `
  ]
})
export class MainPageComponent {

  user: string = 'Bloggi';

  constructor(private router : Router) { }

  createNewBlog(){
    this.router.navigateByUrl('blogs/new-blog')
  }

}
