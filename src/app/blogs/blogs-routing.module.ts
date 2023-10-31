import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { UserBlogPageComponent } from "./pages/user-blog-page/user-blog-page.component";
import { UserPostPageComponent } from "./pages/user-post-page/user-post-page.component";
import { NewBlogPageComponent } from "./pages/new-blog-page/new-blog-page.component";

const routes: Routes = [
  {
    path: 'my-blogs',
    component: UserBlogPageComponent
  },
  {
    path: 'my-posts',
    component: UserPostPageComponent
  },
  {
    path: 'new-blog',
    component: NewBlogPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class BlogsRoutingModule { }
