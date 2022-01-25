import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../Service/bookService';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder();
  message = '';
  constructor(
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    const id = this.route.snapshot.queryParamMap.get('id') ?? '';
    if (id) {
      this.bookService.getBook(id).subscribe((book) => {
        this.form.patchValue(book);
      });
    }
  }

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

    this.bookService.updateBook(this.form.value).subscribe((response) => {
      this.message = 'Book has been updated successfully';
      this.router.navigate(['/viewbook']);
    });
  }

  clearForm() {
    this.form.reset();
  }
}
