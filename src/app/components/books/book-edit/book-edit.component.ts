import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  formEdit? : FormGroup;
  book: any;
  constructor(
    private bookService: BookService,
    private activedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  id: any = this.activedRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.bookService.getById(this.id).subscribe(res => {
      this.book = res;
      this.formEdit = this.fb.group({
        title:[this.book.title],
        author:[this.book.author],
        description:[this.book.description]
      })
    })
  }

  submit() {
    let data = this.formEdit?.value;
    this.bookService.edit( this.id, data).subscribe(res => {
      this.router.navigate(['/book']);
    })
  }
}
