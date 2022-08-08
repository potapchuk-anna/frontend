import {Component, EventEmitter, Input, IterableDiffers, OnInit, Output} from '@angular/core';
import {Observable, Observer, of} from 'rxjs';
import {Book} from "../book";
import {BookService} from "../book.service";


export interface ExampleTab {
  label: string;
  content: Observable<Book[]>;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;
  books: Observable<Book[]> = new Observable<Book[]>();
  recommended:Observable<Book[]> = new Observable<Book[]>();
  currentMsgFromChild1ToChild2 : any;
  @Output() sendToBookPage = new EventEmitter();

  constructor(private bookService: BookService) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>)=> {
        observer.next([
          {label:"All", content:this.books},
          {label:"Recommended", content:this.recommended}
        ])
      });

  }
  ngOnInit(): void {
    this.getBooks();
    this.getRecommended();
  }
  getBooks() {
    this.books = this.bookService.getBooks();
  }
  getRecommended(){
    this.recommended = this.bookService.getRecommendedBooks();
  }
  test(index:number, item:Book){
    return item.title+item.cover+item.author+item.genre+item.content;
  }

  fwdMsgToSib2($event:any) {
    this.currentMsgFromChild1ToChild2 = $event;
    this.sendToBookPage.emit(this.currentMsgFromChild1ToChild2);
  }
}
