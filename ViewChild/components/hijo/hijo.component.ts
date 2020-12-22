import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor(
    private _http: HttpClient  
    ) { }

  ngOnInit(): void {
  }

  titulo = 'Componente hijo'

}
