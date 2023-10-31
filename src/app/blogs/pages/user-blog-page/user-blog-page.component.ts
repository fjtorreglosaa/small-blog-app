import { Component, OnInit } from '@angular/core';
import { Blog } from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blogs.service';

@Component({
  selector: 'app-user-blog-page',
  templateUrl: './user-blog-page.component.html',
  styles: []
})
export class UserBlogPageComponent implements OnInit {
  public tableHeaders: string[] = [
    'ID',
    'AUTHOR',
    'TITLE',
    'DESCRIPTION',
    ''
  ];
  public blogs: Blog[] = [];
  public isLoading: boolean = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogListObservable().subscribe(blogs => {
      this.blogs = blogs;
      this.isLoading = false;
    });

    this.searchAllBlogs();
  }

  searchAllBlogs(): void {
    this.blogService.getUserBlogs().subscribe(
      blogs => {
        this.blogs = blogs;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching blogs:', error);
        this.isLoading = false;
      }
    );
  }

  onDeleteBlog(blog: Blog): void {
    this.blogService.deleteBlog(blog.id);
  }

  onEditBlog(blog: Blog): void {

  }

}
