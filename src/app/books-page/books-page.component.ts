import { Component, OnInit } from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  selectedBook?: Book;
  constructor() { }

  ngOnInit(): void {
  }

  recieveData($event:any):void
  {
    this.selectedBook=$event;
  }

}
