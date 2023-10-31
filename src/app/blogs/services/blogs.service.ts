import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { Blog } from '../interfaces/blog';
import { TokenService } from 'src/app/shared/services/token.service';
import { Router } from '@angular/router';
import { EditedBlog } from '../interfaces/editedBlog.interface';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private apiUrl : string = 'https://localhost:7254/api';
  private blogListSubject: BehaviorSubject<Blog[]> = new BehaviorSubject<Blog[]>([]);
  private editedBlog : EditedBlog = {
    blogId: '',
    blogName: '',
    description: ''
  };

  constructor(private httpClient: HttpClient, private tokenService: TokenService, private router : Router) { }

  get geteditedBlog() {
    return this.editedBlog;
  }

  setEditedBlog(blog : EditedBlog): void{
    this.editedBlog!.blogId = blog.blogId;
    this.editedBlog!.blogName = blog.blogName;
    this.editedBlog!.description = blog.description;
  }

  getBlogListObservable(): BehaviorSubject<Blog[]> {
    return this.blogListSubject;
  }

  private getHttpRequest(url : string) : Observable<Blog[]>{

    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get<Blog[]>(url, {headers})
      .pipe(
        catchError(() => of([]))
      )
  }

  getUserBlogs() : Observable<Blog[]> {
    const url = `${ this.apiUrl }/blog/byuser`;
    return this.getHttpRequest(url);
  }

  createNewBlog(blogName: string, description: string) : void {
    const url = `${this.apiUrl}/blog`;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.httpClient.post(url, { blogName, description }, { headers })
      .subscribe(response => {
        this.router.navigateByUrl('blogs/my-blogs');
      }, error => {
      });
  }

  editBlog(blogId : string, blogName: string, description: string) : void {
    const url = `${this.apiUrl}/blog/${blogId}`;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    console.log(url)

    this.httpClient.put(url, { title: blogName, description }, { headers })
      .subscribe(response => {
        this.router.navigateByUrl('blogs/my-blogs');
      }, error => {
      });
  }

  deleteBlog(id : string) : void {
    const url = `${this.apiUrl}/blog/${id}`;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.httpClient.delete(url, { headers })
      .subscribe(response => {

        this.router.navigateByUrl('blogs/my-blogs');
        this.refreshBlogList();

      }, error => {


      });
  }

  private refreshBlogList(): void {
    this.getHttpRequest(`${this.apiUrl}/blog/byuser`).subscribe(
      blogs => {
        this.blogListSubject.next(blogs);
      },
      error => {
        console.error('Error fetching blogs:', error);
        this.blogListSubject.next([]);
      }
    );
  }
}
