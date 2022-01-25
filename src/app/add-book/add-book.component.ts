import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../Service/bookService';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(private readonly bookService: BookService) {}
  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder();
  message = '';
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      genre: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.message =
        'Invalid form details, please check and fill the form carefully.';
      return;
    }

    this.bookService.addBook(this.form.value).subscribe((response) => {
      this.message = 'Book has been added successfully';
      this.clearForm();
    });
  }

  clearForm() {
    this.form.reset();
  }
}
