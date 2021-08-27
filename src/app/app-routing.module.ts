import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./components/layouts/master/master.component";

const routes: Routes = [
  {
    path : '',
    component: MasterComponent,
    children: [
      {
        path: 'book',
        loadChildren: () => import('./components/books/books.module').then(m => m.BooksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
