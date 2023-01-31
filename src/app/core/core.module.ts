import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// https://stackoverflow.com/questions/62295166/how-to-import-all-angular-material-modules-in-angular-9
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FormComponent } from './form/form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TareasComponent } from './tareas/tareas.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductonuevoComponent } from './productonuevo/productonuevo.component';




@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
    UsuariosComponent,
    TareasComponent,
    HomeComponent,
    ProductosComponent,
    ProductonuevoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //
    MaterialModuleModule
  ],
  exports: [
    // TablaComponent,
    LoginComponent,
    FormComponent,
    UsuariosComponent,
    TareasComponent,
    ProductosComponent
  ]
})
export class CoreModule { }
