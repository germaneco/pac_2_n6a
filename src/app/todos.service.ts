import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosEndpoints } from './networking/endpoints';


@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  todos(): Observable<any> {
    return this.http.get(
     TodosEndpoints.GET_ALL
    );
  }

  todosById(name: string): Observable<any> {
    return this.http.get(
     TodosEndpoints.GET_BY_ID
    );
  }
}
