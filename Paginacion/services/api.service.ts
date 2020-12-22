import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/interfaces';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getLista(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos/')
  }
}
