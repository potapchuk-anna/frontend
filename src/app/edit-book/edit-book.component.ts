import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book";
import {FileInput} from "ngx-material-file-input";
import {BookService} from "../book.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  newBook:Book;
  fileInput: FileInput;
  isEdit:boolean=false;
  isValid:boolean=false;
  @Input() set book(value:Book|undefined){
    if(value)
    {
      this.newBook={...value};
      this.isEdit=true;
    }
  }
  constructor(private bookService: BookService) {
    this.fileInput = new FileInput(null);
    this.newBook = {title: "", cover: "", author: "", content: "", genre: ""} as Book;
  }

  ngOnInit(): void {

  }
  ngDoCheck():void{
    if(this.newBook.title
      && this.newBook.content
      &&this.newBook.author
      && this.newBook.genre)
      this.isValid=true;
    else this.isValid=false;
  }

  async onClear(){
    this.newBook = {title: "", cover: "", author: "", content: "", genre: ""} as Book;
    if (this.isEdit==false&&this.fileInput!=null)
    {
      this.fileInput = new FileInput(null);
    }

  }

  async onSubmit() {
    if(this.fileInput!=null)
    {
      this.newBook.cover = await this.convertToBase64(this.fileInput.files[0]);
    }
    else
      this.newBook.cover="";
    if(this.isEdit){
      this.bookService.update(this.newBook);
      await this.onClear();
      this.isEdit=false;
      this.isValid=false;
    }
    else {
      this.newBook.reviewsNum=0;
      this.newBook.rating=0;
      this.bookService.add(this.newBook);
      await this.onClear();
      this.isValid=false;
    }
  }
  async convertToBase64(file : File) : Promise<string> {
    const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    return await toBase64(file) as string;
  }
}
