import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path: "create",
    component: BookAddComponent
  },
  {
    path: ":id/edit",
    component: BookEditComponent
  },
  {
    path: ":id/detail",
    component: BookDetailComponent
  }
]

@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    BookDetailComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
