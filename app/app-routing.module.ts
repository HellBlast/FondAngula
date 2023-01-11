import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';

const routes: Routes = [
  {path:'', redirectTo:'lista-usuario', pathMatch:'full'},
  {path:'lista-usuario',component:ListaUsuarioComponent},
  {path:'crear-usuario',component:CrearUsuarioComponent},
  {path:'actualizar-usuario/:id',component:ActualizarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
