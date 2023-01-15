import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  //@ViewChild("author") author ?: HTMLInputElement;
  Books !: Book[] ;
  previewMode : boolean  = false;
  searchString : string  = "";


  constructor(private bookService  : BookService){

  }

  onClickImage(book : Book){
    book.previewMode = !book.previewMode;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.getBooks(this.searchString);
  }

  private getBooks(author: string) {
    this.bookService.getBooks(author).then((books)=>{
      this.Books  = books;
      console.log(books)
    })
  }





}
