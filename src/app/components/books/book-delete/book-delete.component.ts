import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: any;

  constructor(private bookService: BookService,
              private activedRoute: ActivatedRoute,
              private router: Router) {
  }
  id: any = this.activedRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.bookService.getById(this.id).subscribe(res => {
      this.book = res;
    })

  }


  deleteBook(id: number) {
    if (confirm(`Are you sure?`)) {
      this.bookService.destroy(id).subscribe(res => {
        this.router.navigate(['/book'])
      })
    }
  }

}
