import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBlogPageComponent } from './pages/user-blog-page/user-blog-page.component';
import { PostComponent } from './components/post/post.component';
import { UserPostPageComponent } from './pages/user-post-page/user-post-page.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogService } from './services/blogs.service';
import { NewBlogPageComponent } from './pages/new-blog-page/new-blog-page.component';
import { FormsModule } from '@angular/forms';
import { EditBlogPageComponent } from './pages/edit-blog-page/edit-blog-page.component';

@NgModule({
  declarations: [
    UserBlogPageComponent,
    PostComponent,
    UserPostPageComponent,
    NewBlogPageComponent,
    EditBlogPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogsRoutingModule,
    FormsModule
  ],
  exports: [
    UserBlogPageComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogsModule { }
