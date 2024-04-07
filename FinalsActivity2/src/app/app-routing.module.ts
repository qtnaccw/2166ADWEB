import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GridComponent } from './components/grid/grid.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: BookDetailComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'grid', component: GridComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }