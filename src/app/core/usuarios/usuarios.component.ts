import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioserviceService } from 'src/app/servicios/usuarioservice.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  // ************ //
  listado: Usuario[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email','website'];//+++
  dataSource: any;
  clickedRows = new Set<Usuario>();

  // ************ //

  constructor(private servicio: UsuarioserviceService){}

 
  ngOnInit(){ 
    this.servicio.getLimitedUsuarios(0,20).subscribe({
      next: (UserAll: Usuario[]) => 
        {
          this.listado = UserAll,
          this.dataSource = this.listado
          console.log(UserAll);
          console.log(this.listado);
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });   
  }

}
