import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchByKeyword = new Subject<string>();

  constructor() { }
}
