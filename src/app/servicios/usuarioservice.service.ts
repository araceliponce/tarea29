import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarea, Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioserviceService {


  apiUsuariosUrl = (environment.apiURL + '/users') || 'https://jsonplaceholder.typicode.com/users'

  apiTareasUrl = 'https://jsonplaceholder.typicode.com/todos'



  constructor(private http:HttpClient){}
  
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUsuariosUrl)
  }

  //get x items, teniendo un inicio y final
  getLimitedUsuarios(start:number,limit:number):Observable<Usuario[]>{
    this.apiUsuariosUrl = this.apiUsuariosUrl+`?_start=${start}&_limit=${limit}`;

    return this.http.get<Usuario[]>(this.apiUsuariosUrl);
  }

  //cada pag,por default muestra 10 items
  getUsuariosOfPage(page:number | 1){
    this.apiUsuariosUrl = this.apiUsuariosUrl+`?_page=${page}`;
    
    return this.http.get<Usuario[]>(this.apiUsuariosUrl);
  }


  getUsuarioId(userId: string):Observable<Usuario>{
    const url = this.apiUsuariosUrl+userId;
    return this.http.get<Usuario>(url); // parecerá que hay errores hasta que completes el metodo
  }

  getTareas():Observable<Tarea[]>{
    // apiTareasUrl = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Tarea[]>(this.apiTareasUrl)
  }

  getLimitedTareas(start:number,limit:number):Observable<Tarea[]>{
    this.apiTareasUrl = this.apiTareasUrl+`?_start=${start}&_limit=${limit}`;

    return this.http.get<Tarea[]>(this.apiTareasUrl)

  }


}
