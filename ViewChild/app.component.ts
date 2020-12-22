import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { HijoComponent } from './components/hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '@ViewChild';

  /* @ViewChild('nombre', { static: true }) nombre: ElementRef */

  @ViewChild(HijoComponent, { static: true }) hijo: HijoComponent

  ngOnInit() {
    console.log(this.hijo)
/*     console.log(this.nombre.nativeElement.value)
    this.nombre.nativeElement.value = 'Luis'
    console.log(this.nombre.nativeElement.value) */
  }

  changeTitle(){
    this.hijo.titulo = 'Componente hijo Luis MM'
  }

}
