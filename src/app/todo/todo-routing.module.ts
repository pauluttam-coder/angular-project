import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      {
        path: 'list',
        component: TodoListComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/todo/list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
