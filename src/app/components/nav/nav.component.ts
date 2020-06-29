import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchKeyword = '';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchOnKeyUp(event) {
    const keywords = event.target.value;
    console.log(keywords);

    this.searchService.searchByKeyword.next(keywords);
  }

}
