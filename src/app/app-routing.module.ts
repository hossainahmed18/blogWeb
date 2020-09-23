import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component'
import {CommentsComponent} from './comments/comments.component'
import {CommentFormComponent} from './comment-form/comment-form.component'
import {LoginComponent} from './login/login.component'
import {SinglePostComponent} from './single-post/single-post.component'
import {CreatePostComponent} from './create-post/create-post.component'


import {AuthGuard} from './auth.guard'
import {AdminAuthGuard} from './admin-auth.guard'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },
  {
    path: 'user/register',
    component: LoginComponent
  },
  {
    path: 'user/login/:id',
    component: LoginComponent
  },
  {
    path: 'posts/:id',
    component: SinglePostComponent
  },
  {
    path: 'posts/:id/:com',
    component: SinglePostComponent
  },
  {
    path: 'post/create-post',
    canActivate: [AdminAuthGuard],
    component: CreatePostComponent
  },
  {
    path: 'post/create-post/:id',
    canActivate: [AdminAuthGuard],
    component: CreatePostComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
