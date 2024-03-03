import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: 'list',
        component: PostListComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/posts/list'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/posts/list',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
