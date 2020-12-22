import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup

  constructor(
    private _data: DataService,
    private _fb: FormBuilder
  ) {
    this.loginForm = this._fb.group({
      user: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
    })
   }

   iniciarSesion({ user, password}): void {
     console.log(user, password);
     if (user == 'LeParadoxHD' && password == '12345') {
       alert('Inicio de sesión correcto!')
       this._data.logueado = true
     } else {
       alert('Credenciales incorrectas')
       this._data.logueado = false
     }
   }


}
