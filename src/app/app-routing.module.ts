import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: '',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/posts/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
