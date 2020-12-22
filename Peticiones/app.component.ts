import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peticiones'; //Peticiones Http por URL

  constructor(
    private _http: HttpClient
  ) {
    // GET
    /*     this._http.get('https://jsonplaceholder.typicode.com/users', { 
        /*    headers: {
            'Content-Type': 'multipart/form-data'
            // 'Content-Type': 'application/json' 
        } */

    // observe: "response"

    /*     params: {
          'hola': '2'
        } */

    /* reportProgress: true */


    // POST
    let form = new FormData();
    form.append('archivo', 'texto')
    /*     this._http.post('https://jsonplaceholder.typicode.com/users', form, {
          //datos: 'hola'
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .subscribe(
          data => console.log(data),
          err => console.log(err),
        () => console.log("Petición finalizada")
        ) */

    // DELETE
/*     this._http.delete('https://jsonplaceholder.typicode.com/users', {
      params: {
        id: '1'
      }
    })
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log("Petición finalizada")
      ) */

      // PATCH
    this._http.patch('https://jsonplaceholder.typicode.com/users', {
        nuevo_nombre: 'Luis'
    })
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log("Petición finalizada")
      )

  }
}
