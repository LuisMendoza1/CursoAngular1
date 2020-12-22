import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor (
    private _http: HttpClient
  ) { }

  usuarios: Usuario[] = []

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      delay(4000)
    )
    .subscribe((usuarios: Usuario[]) => this.usuarios = usuarios)
  }
}

export interface Usuario {
  name: string
}
