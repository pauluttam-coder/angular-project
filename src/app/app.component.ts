import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Angular Project';
  public isLoading: boolean = true;

  constructor(
    private _router: Router,
    private _eventService: EventService
  ) { }

  ngOnInit() {
    // Scroll to top after route change
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    //Page loader event
    this._eventService.isLoading.subscribe((resp: any) => {
      if (resp) {
        setTimeout(() => {
          this.isLoading = true;
        }, 0);
      } else {
        setTimeout(() => {
          this.isLoading = false;
        }, 0);
      }
    });
  }
}
