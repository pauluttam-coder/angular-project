import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [TodoListComponent, TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class TodoModule { }
