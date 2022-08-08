import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from "../book";
import {MatDialog} from "@angular/material/dialog";
import {ViewBookComponent} from "../view-book/view-book.component";


@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  @Input() book?: Book;
  @Output() sendToBookList = new EventEmitter();


  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ViewBookComponent, {
      data: this.book,
      width:"70%"
    });
  }
  onSelect(book: Book):void{
    this.sendToBookList.emit(book);
  }
}
