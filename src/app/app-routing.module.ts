import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainPageComponent } from "./shared/pages/main-page/main-page.component";
import { LoginPageComponent } from "./shared/pages/login-page/login-page.component";
import { RegisterPageComponent } from "./shared/pages/register-page/register-page.component";


const routes: Routes = [
    {
      path: 'login',
      component: LoginPageComponent
    },
    {
      path: 'register',
      component: RegisterPageComponent
    },
    {
      path: 'home',
      component: MainPageComponent
    },
    {
      path: 'blogs',
      loadChildren: () => import('./blogs/blogs.module').then(module => module.BlogsModule)
    },
    {
      path: '**',
      redirectTo: 'home'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
