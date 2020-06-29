import { Component, OnInit } from '@angular/core';
import { BookList } from 'src/app/BookList';
import { ConnectService } from 'src/app/services/connect/connect.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookList: BookList[] = [];
  searchList = [];

  constructor
    (
      private connectService: ConnectService,
      private searchService: SearchService
    ) { }

  ngOnInit() {
    this.connectService.getAll().subscribe(result => {
      this.bookList = result;
      this.searchList = this.bookList;
      this.searchService.searchByKeyword.subscribe(keyword => {
        this.searchList = this.bookList.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
      });
    });

  }

  deletePost(id: number) {
    const confirmDelete = confirm('Are you sure!?');
    if (confirmDelete) {
      const post = this.bookList[id];
      this.connectService.delete(post.id).subscribe(() => {
        this.bookList = this.bookList.filter(t => t.id !== post.id);
      });
    }
  }

}
