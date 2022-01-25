import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewBookComponent } from './view-book/view-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'addbook',
  },
  {
    path: 'addbook',
    component: AddBookComponent,
  },
  {
    path: 'updatebook/:bid',
    component: UpdateBookComponent,
  },
  {
    path: 'viewbook',
    component: ViewBookComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  declarations: [
    AppComponent,
    AddBookComponent,
    ViewBookComponent,
    UpdateBookComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
