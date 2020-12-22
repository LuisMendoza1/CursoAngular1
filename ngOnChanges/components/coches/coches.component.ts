import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnChanges {

  datos = [
    { marca: 'Volvo', value: 10},
    { marca: 'Volvo', value: 38},
    { marca: 'Toyota', value: 6},
    { marca: 'Toyota', value: 87},
    { marca: 'Mercedes', value: 87},
    { marca: 'Mercedes', value: 45},
    { marca: 'Hyundai', value: 34},
    { marca: 'Hyundai', value: 12},
  ]

  ngOnChanges(changes: SimpleChanges) {
    if (changes.marca.currentValue != changes.marca.previousValue){
      const nuevaMarca = changes.marca.currentValue
      const datos = this.datos.filter(dato => dato.marca == nuevaMarca)
      console.log(datos)
      datos.forEach(datos => this.total += datos.value)
    }
  }

  @Input() marca: string

  total: number = 0


}
