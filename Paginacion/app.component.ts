import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from './common/interfaces';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private api: ApiService
  ) {}

  ngOnInit (){
    this.api.getLista().subscribe(datos => this.datos = datos)
  }

  datos: User[] = []

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 10
  page_number: number = 1
  pageSizeOptions = [5, 10, 20, 50, 100]
}
