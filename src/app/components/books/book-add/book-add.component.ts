import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  formBookAdd?: FormGroup ;
  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.formBookAdd = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    })

  }

  submit() {
    let data = this.formBookAdd?.value;
    console.log(data.id)
    this.bookService.create(data).subscribe(res => {
      this.router.navigate(['/book'])
    })
  }
}
