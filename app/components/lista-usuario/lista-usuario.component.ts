import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css'],
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: any;
  constructor(private router: Router, private usuarioservice: UsuarioService) {}

  ngOnInit(): void {
    this.showAll();
  }
  valorejirian: any = -1;

  showAll() {
    return this.usuarioservice.getAll().subscribe((result) => (this.usuarios = result));
  }

  nuevoUsuario() {
    //console.log("listo esperando para ir a nuevo usuario");
    this.router.navigate(['crear-usuario']);
  }

  eliminarUsuario(id: string) {
    return this.usuarioservice.deleteUsuario(id).subscribe(
      (result: any) => {
        this.showAll();
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  } //endEliminar

  editarUsuario(id: string) {
    //http://localhost:4200/actualizar-usuario/5
    this.router.navigate(['actualizar-usuario/' + id]);
  }
}
