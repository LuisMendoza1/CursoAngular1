import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable()
export class ConfigService {

  datos;

  constructor(
    private _http: HttpClient
  ) { }

  loadConfig(): Promise<any> {
    return this._http.get('assets/config.json').pipe(
      tap(data => {
        console.log(data);
        this.datos = data;
      })
    ).toPromise();
  }
}

