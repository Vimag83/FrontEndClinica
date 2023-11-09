
import { Injectable } from '@angular/core';
import { ItemCitaAdminDTO } from '../modelo/item-citaadmindto';
import { RegistroCitaDTO } from '../modelo/registro-citadto';

@Injectable({
  providedIn: 'root'
})

export class CitaService {

  citas: ItemCitaAdminDTO[];

  constructor() {
    this.citas = [];
    // Agrega algunas citas de ejemplo
    this.citas.push({ codigoCita: 1,  nombreMedico: "memo", especialidad:"neumologo",  estadoCita:"Activo", fecha: '2023-11-15', motivo: "hola"});
    this.citas.push({ codigoCita: 2,  nombreMedico: "memo", especialidad:"neumologo",  estadoCita:"Activo", fecha: '2023-11-15', motivo: "hola"});
    this.citas.push({ codigoCita: 3,  nombreMedico: "memo", especialidad:"neumologo",  estadoCita:"Activo", fecha: '2023-11-15', motivo: "hola"});
    this.citas.push({ codigoCita: 4,  nombreMedico: "memo", especialidad:"neumologo",  estadoCita:"Activo", fecha: '2023-11-15', motivo: "hola"});
    this.citas.push({ codigoCita: 1,  nombreMedico: "memo", especialidad:"neumologo",  estadoCita:"Activo", fecha: '2023-11-15', motivo: "hola"});

  }
  public listar(): ItemCitaAdminDTO[] {
    return this.citas;
  }

  public obtener(codigo: number): ItemCitaAdminDTO | undefined {
    return this.citas.find(citas => citas.codigoCita === codigo);
  }

  public crear(citas: RegistroCitaDTO) {
    /*let codigo = this.citas.length + 1;
    this.citas.push({
      codigoCita: codigo,
      nombreMedico: citas.nombrePaciente,
      estadoCita: citas.estado,
      
      
      nombreMedico: citas.nombrePaciente,
      
      fecha: new Date().toISOString(),
      //: citas.codigoMedico,
      motivo: citas.motivo,
      estado: citas.estado
    });
    this.citas.push(nuevaCita);*/
  }
}
