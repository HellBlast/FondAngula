import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    documento: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    correo: '',
    created: new Date,
    modified: new Date
  };

  constructor(private usuarioservice: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarUsuario() {
    this.usuarioservice.saveUsuario(this.usuario).subscribe(
      (datos: any) => {

        alert(datos['mensaje']);
        this.router.navigate(['/lista-usuario']);
      },
      (error) => { console.log(error) }
    );


  }

}
