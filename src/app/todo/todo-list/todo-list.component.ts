import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public pageData: any = [];
  public count: number = 0;
  public page: number = 1;
  public pageSize: number = 10;

  constructor(
    private _apiService: ApiService,
    private _eventService: EventService
  ) { }

  ngOnInit(): void {
    this.storagePageConfig();
    this.getPageData();
  }

  //Get and Set storage page config
  storagePageConfig() {
    let todoPage = localStorage.getItem('todo_page');
    let todoPageSize = localStorage.getItem('todo_page_size');

    if (todoPage != null && todoPageSize != null) {
      this.page = parseInt(todoPage);
      this.pageSize = parseInt(todoPageSize);
    } else {
      localStorage.setItem('todo_page', this.page.toString());
      localStorage.setItem('todo_page_size', this.pageSize.toString());
    }
  }

  //Get page data function
  getPageData() {
    this._eventService.setLoaderEmmit(true);
    this._apiService.get('todos').subscribe((resp: any) => {
      this.pageData = [];
      this._eventService.setLoaderEmmit(false);
      if (resp.length > 0) {
        this.pageData = resp;
        this.count = this.pageData.length;
      }
    },err=>{
      this._eventService.setLoaderEmmit(false);
    });
  }

  //On change function for page number
  onPageChange(event: number) {
    this.page = event;
    localStorage.setItem('todo_page', this.page.toString());
    localStorage.setItem('todo_page_size', this.pageSize.toString());
  }

  //On change function for per page data count
  onPageSizeChange(event: any) {
    this.pageSize = parseInt(event.target.value);
    this.page = 1;
    localStorage.setItem('todo_page', this.page.toString());
    localStorage.setItem('todo_page_size', this.pageSize.toString());
  }
}
