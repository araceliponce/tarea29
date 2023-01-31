import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { ProductosComponent } from './core/productos/productos.component';
import { TareasComponent } from './core/tareas/tareas.component';
import { UsuariosComponent } from './core/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},

  /* {path: 'login', component: LoginComponent},
  {path: 'usuarios', component: UsuariosComponent, canActivate: [CanactivateGuard]},
  {path: 'tareas', component: TareasComponent, canActivate: [CanactivateGuard]}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
