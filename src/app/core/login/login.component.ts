import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { UsuarioserviceService } from 'src/app/servicios/usuarioservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hidePass = true;

  constructor(private authService: AutenticacionService, private router: Router, private servicio: UsuarioserviceService) { }

  listado: Usuario[] = [];
  listadoCopia = [...this.listado];
 
  ngOnInit(){ 
    this.servicio.getUsuarios().subscribe({
      next: (UserAll: Usuario[]) => 
        {
          this.listado = UserAll,
          console.log(this.listado);
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
  }


  routeRedirect = '';

  nom = '';
  pass = '';

  login() {
    // console.log(this.listado); [{},{}...]
    //usamos filter para encontrar si el value es value de un objeto del listado (array de objetos)
    let usuarioConUsername = this.listado.filter((x)=> x.username.toLowerCase() == this.nom.toLowerCase()); //boolean

    let usuarioEmail = usuarioConUsername[0].email.toLowerCase();
    /* 
    bret
    Sincere@april.biz
    */
 
    /* tmb funciona
     let existe = this.listado.find((o) => o.username == this.nom); */

    console.log(usuarioConUsername);
    // alert(this.nom+this.pass)

    if(usuarioConUsername.length>0 && this.pass.toLowerCase() == usuarioEmail){
      this.authService.login();
      this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
      this.authService.urlUsuarioIntentaAcceder = '';
      this.router.navigate(['/usuarios']); //1ra vista tras acceder es /usuarios
    }
    else{
      alert('datos de acceso incorrectos')
    }
  }  

}
