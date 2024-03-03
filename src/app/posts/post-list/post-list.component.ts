import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
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
    let postsPage = localStorage.getItem('posts_page');
    let postsPageSize = localStorage.getItem('posts_page_size');

    if (postsPage != null && postsPageSize != null) {
      this.page = parseInt(postsPage);
      this.pageSize = parseInt(postsPageSize);
    } else {
      localStorage.setItem('posts_page', this.page.toString());
      localStorage.setItem('posts_page_size', this.pageSize.toString());
    }
  }

  //Get page data function
  getPageData() {
    this._eventService.setLoaderEmmit(true);
    this._apiService.get('posts').subscribe((resp: any) => {
      this._eventService.setLoaderEmmit(false);
      this.pageData = [];
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
    localStorage.setItem('posts_page', this.page.toString());
    localStorage.setItem('posts_page_size', this.pageSize.toString());
  }

  //On change function for per page data count
  onPageSizeChange(event: any) {
    this.pageSize = parseInt(event.target.value);
    this.page = 1;
    localStorage.setItem('posts_page', this.page.toString());
    localStorage.setItem('posts_page_size', this.pageSize.toString());
  }
}
