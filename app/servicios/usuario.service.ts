import { Injectable } from '@angular/core';
//--para poder acceder por http a la API
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //--Direccion de la api
  API_URL = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }
  //-- Conectar con el back y trae todos los registros de usuario
  getAll() {
    return this.http.get(this.API_URL + 'usuarios');
  }

  //------ Guardar el usuario
  saveUsuario(reg: Usuario | undefined) {
    return this.http.post(this.API_URL + 'usuarios', reg);
  }

  //--- Elimina un usuario dado su id
  deleteUsuario(id: string) {
    if (confirm("Seguro que deseas Eliminar el registro " + id + " ?")) {
      //return this.http.get(this.API_URL+'eliminar.php?id='+id);
      return this.http.delete(this.API_URL + 'usuarios/' + id);
    }

    return this.getAll();
  }//enddelete

  //--- Retorne un usuario dado su ID
  getUsuario(id: string) {
    return this.http.get(this.API_URL + 'usuarios/' + id);
  }

  getdetalle(id: string) {
    return this.http.get(this.API_URL + 'detalles_libros/' + id);
  }

  getcantidad(id: string) {
    return this.http.get(this.API_URL + 'libros_cantidad/' + id);
  }
  //---- actualice un usuario dado obj de tipo Usuario
  updateUsuario(reg: Usuario | undefined) {
    console.log("service", reg);
    return this.http.put(this.API_URL + 'usuarios', reg);
  }
}
