import { Component } from '@angular/core';
import { Tarea } from 'src/app/interfaces/usuario';
import { UsuarioserviceService } from 'src/app/servicios/usuarioservice.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {


  listado:Tarea[] = [];
  query = '';

  constructor(private servicio: UsuarioserviceService){}

 
  ngOnInit(){
    this.servicio.getLimitedTareas(0,10).subscribe({
      next: (tareasTodas: Tarea[]) => 
        {
          this.listado = tareasTodas,
          // this.dataSource = this.listado
          // console.log(tareasTodas);
          console.log(this.listado);
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });

    
  }


}
