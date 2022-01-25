import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/books';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private readonly httpClient: HttpClient) {}

  addBook(book): Observable<any> {
    return this.httpClient.post(url, book);
  }

  getBooks(): Observable<any> {
    return this.httpClient.get(url);
  }

  getBook(id) {
    return this.httpClient.get(`${url}/${id}`);
  }

  deleteBook(id: any): Observable<any> {
    return this.httpClient.delete(`${url}/${id}`);
  }

  updateBook(book: any): Observable<any> {
    return this.httpClient.put(url, book);
  }
}
