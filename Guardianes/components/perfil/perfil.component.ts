import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  perfilForm: FormGroup

  constructor(
    private _data: DataService,
    private _fb: FormBuilder
  ) {
    this.perfilForm = this._fb.group({
      user: ['taertius', Validators.compose([Validators.required, Validators.maxLength(20)])],
      nombre: ['Luis', Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: ['luis.mendoza@hotmail.com', Validators.compose([Validators.required, Validators.maxLength(20)])],
    })
    this.perfilForm.valueChanges.subscribe(_ => this._data.hasBeenModified = true)
   }

   guardar({ user, nombre, email }): void {
     alert("Guardado!")
   }



}
