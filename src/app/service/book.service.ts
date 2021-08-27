import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.url_api)
  }

  getById(id:number): Observable<any> {
    return this.httpClient.get(environment.url_api + id)
  }

  destroy(id: number): Observable<any>  {
    return this.httpClient.delete(environment.url_api  + id)
  }

  create(data: any) : Observable<any> {
    return this.httpClient.post(environment.url_api , data )
  }

  edit(id: number, data: any): Observable<any> {
    return this.httpClient.put(environment.url_api + id, data)
  }
}

