import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  usuario: Usuario={
    id:0,
    documento:'',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    correo: '',
    created: new Date,
    modified: new Date
    };

  constructor(private usuarioservice: UsuarioService, private router: Router, private activedrouter: ActivatedRoute) {
    
  }


  ngOnInit(): void {
    let id = this.activedrouter.snapshot.paramMap.get('id');//get id
    if (id) {
      this.usuarioservice.getUsuario(id).subscribe(
        (resul: any) => {
          this.usuario = resul;
          console.log("Registro estraido: ", this.usuario);
        },
        (error) => { console.log("Error: ", error) }
      );
    }
  }

  modificarUsuario() {
    this.usuarioservice.updateUsuario(this.usuario).subscribe(
      (datos: any) => {
        alert(datos['mensaje']);
        this.router.navigate(['/lista-usuario']);
      },
      (error) => { console.log(error) }
    );
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
