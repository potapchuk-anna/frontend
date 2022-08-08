import { Injectable } from '@angular/core';
import {BOOKS, RECOMMENDED} from "./mock-books";
import {Book} from "./book";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks(): Observable<Book[]> {
    return new Observable(subscriber => subscriber.next(BOOKS));
  }
  getRecommendedBooks(): Observable<Book[]> {
    return new Observable(subscriber => subscriber.next(RECOMMENDED));
  }
  add(book:Book): void{
    this.addToArray(book,BOOKS);
    this.addToArray(book,RECOMMENDED);
  }
  private addToArray(book:Book, books:Book[]){
    books.push(book);
  }
  update(newBook: Book){
    this.updateElement(newBook,BOOKS);
    this.updateElement(newBook,RECOMMENDED);
  }
  private updateElement(newBook: Book, books:Book[]){
    let index = books.findIndex(book=>book.id==newBook.id);
    books[index] = newBook;
    console.log(BOOKS);
  }
  delete(book:Book){
    this.deleteElement(book,BOOKS);
    this.deleteElement(book,RECOMMENDED);
  }
  private deleteElement(deletedBook: Book, books:Book[]){
    let index = books.findIndex(book=>book.id==deletedBook.id);
    books.splice(index,1);
  }
}
