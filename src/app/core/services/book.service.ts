
import { Injectable} from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookApiService } from './api/book-api.service';

@Injectable()
export class BookService {


  constructor(private bookApiService : BookApiService) { }


  getBooks(author : string )  : Promise<Book[]> {
    return new Promise((resolve, reject) => {
       this.bookApiService.request(author).subscribe((books : any)=>{
        let results : Book[] = books.items.map((book : any) => {
          return new Book(
            this.getSafe<string>(()=>book.volumeInfo.title),
            this.getSafe<string[]>(()=>book.volumeInfo.authors),
            this.getSafe<string>(()=>book.volumeInfo.imageLinks.thumbnail)
          )
        })
          resolve(results);
       },
       (error)=>{
          console.log(error);
          reject(error);
        }
       )
    });
  }

  private getSafe<T> (f: () => T) : T  {
    return f();
  }
}
