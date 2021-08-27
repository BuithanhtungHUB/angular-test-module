import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../../service/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  formDetail? : FormGroup;
  book: any;
  constructor(
    private bookService: BookService,
    private activedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  id: any = this.activedRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.bookService.getById(this.id).subscribe(res => {
      this.book =res;
      // this.formDetail = this.fb.group({
      //   title: [this.book.title],
      //   author:[this.book.author],
      //   description:[this.book.description]
      // })
    })
  }

}
