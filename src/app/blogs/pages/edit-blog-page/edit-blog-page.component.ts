import { Component } from '@angular/core';
import { BlogService } from '../../services/blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-blog-page',
  templateUrl: './edit-blog-page.component.html',
  styles: [
  ]
})

export class EditBlogPageComponent {

  title: string = this.blogService.geteditedBlog.blogName;
  description: string = this.blogService.geteditedBlog.description;;
  blogId : string = this.blogService.geteditedBlog.blogId;;

  constructor(private blogService : BlogService, private router : Router) {}

  editBlog() : void {
    this.blogService.editBlog(this.blogId, this.title, this.description);
  }

  returnToBlogs() : void {
    this.router.navigateByUrl('blogs/my-blogs');
  }

}
