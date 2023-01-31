import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //on init checkear si esta logueado
  //metodo logout
  usuarioLogueado = false;
  constructor(public autenticacion: AutenticacionService) { }

  ngOnInit() {
    this.usuarioLogueado = this.autenticacion.isLoggedIn('');
    this.autenticacion.changeLoginStatus$.subscribe(
      (loggedStatus: boolean) => {this.usuarioLogueado = loggedStatus;}
    )
  }

  logout() {
    this.autenticacion.logout();
  }
}
