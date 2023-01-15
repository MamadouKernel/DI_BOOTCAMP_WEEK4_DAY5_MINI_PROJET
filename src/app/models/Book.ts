export class Book {

  /*title?: string;
  authors :  string[]   = [];
  coverImage?: string;*/

  previewMode : boolean =   true;
  constructor(public title: string, public authors: string[], public coverImage: string) {

  }

  getAuthorsList() : string {
    return this.authors.join(", ");
  }
}
