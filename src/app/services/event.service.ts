import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //Declare events
  loading = new BehaviorSubject(true);
  isLoading = this.loading.asObservable();

  constructor() { }

  //Set events data
  setLoaderEmmit(isLoding: boolean) {
    return this.loading.next(isLoding);
  }
}
