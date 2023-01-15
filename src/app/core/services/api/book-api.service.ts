import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  urlString = "https://www.googleapis.com/books/v1/volumes?";
  apiKey    = "AIzaSyCf99YjV9PGjRvLfULeHiYM81GnuOuIxSo";

  constructor(private http  : HttpClient) {

  }

  request(parameter: string) {
    let apiURL = `${this.urlString}?q=inauthor:"${parameter}"&langRestrict=en&key=${this.apiKey}`;
    return this.http.get(apiURL,{headers : this.getHeader()});
  }


  getHeader(){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Accept': 'application/json',
    });
  }
}
