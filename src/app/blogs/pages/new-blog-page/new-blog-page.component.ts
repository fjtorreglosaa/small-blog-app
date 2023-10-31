import { Component } from '@angular/core';
import { BlogService } from '../../services/blogs.service';

@Component({
  selector: 'app-new-blog-page',
  templateUrl: './new-blog-page.component.html',
  styles: [
  ]
})

export class NewBlogPageComponent {

  title: string = '';
  description: string = '';

  constructor(private blogService : BlogService) {}

  newBlog() : void {
    this.blogService.createNewBlog(this.title, this.description);
  }
}
