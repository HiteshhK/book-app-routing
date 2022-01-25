import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Model/Book';
import { BookService } from '../Service/bookService';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  books: Book[] = BOOKS;
  constructor(private readonly bookService: BookService,
    private readonly router:Router) {}

  ngOnInit() {
    // this.bookService.getBooks().subscribe(
    //   (list) => {
    //     this.books = list;
    //   },
    //   (error) => {
    //     this.books = [];
    //   }
    // );
  }

  bookAction(action: string, book: Book) {
    if(action==='edit'){
      this.router.navigate(['/updatebook',book.id]);
    }
  }
}

const BOOKS: Book[] = [
  new Book('1', 'The Alchemist', 'fantasy', 200.0),
  new Book('2', 'The Lord of the rings', 'fantasy', 700.0),
  new Book('3', 'The Blue uumbrella', 'fantasy', 95.0),
  new Book('4', 'Asylum', 'fantasy', 319.0),
  new Book('5', 'The Perfect Murder', 'Thriller', 195.0),
  new Book('6', 'The Adventure of sherlok', 'Thriller', 2000.0),
  new Book('7', 'Before i go to sleep', 'Thriller', 1200.0),
  new Book('8', 'Kite runner', 'Fiction', 510.0),
  new Book('9', 'All the light we can not see', 'Fiction', 660.0),
  new Book('10', 'Harry potter series', 'Fiction', 2000.0),
];
