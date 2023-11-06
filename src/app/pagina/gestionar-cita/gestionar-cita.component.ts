import { Component } from '@angular/core';
import { ItemCitaAdminDTO } from 'src/app/modelo/item-citaadmindto';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-gestionar-cita',
  templateUrl: './gestionar-cita.component.html',
  styleUrls: ['./gestionar-cita.component.css']
})
export class GestionarCitaComponent {

  
  cita: ItemCitaAdminDTO[];
  
constructor( private citaService: CitaService ) {
this.cita = citaService.listar();
}

}
