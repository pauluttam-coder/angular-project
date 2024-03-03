import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostsComponent } from './posts.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShortTextPipe } from '../pipes/shorttext.pipe';

@NgModule({
  declarations: [ 
    PostListComponent, 
    PostsComponent,
    ShortTextPipe
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class PostsModule { }
