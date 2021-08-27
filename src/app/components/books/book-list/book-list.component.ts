import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;
  count: any;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
   this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
      this.count = this.books.length;
      console.log(this.books);
    })
  }

  deleteBook(id: number) {
    if (confirm(`Are you sure?`)) {
      this.bookService.destroy(id).subscribe(res => {
        this.getAllBook();
      })
    }
  }

}
