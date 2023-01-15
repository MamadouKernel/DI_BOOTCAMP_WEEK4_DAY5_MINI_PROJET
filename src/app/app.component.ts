import { Component, OnInit } from '@angular/core';
import { Book } from './models/Book';
import { preloadedBooks } from './core/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = "Awesome book App";
  Books = preloadedBooks();
  previewMode : boolean  = true;

  constructor() {

  }
  ngOnInit(): void {

  }


  onClickImage(){

  }
}
