import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']



})
export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;
  eps:string[];
  tipoSangre: string[];


  constructor(){
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.eps =[];
    this.cargarEps();
    this.tipoSangre =[];
    this.cargarTipoSangre();
  }

 

  private cargarEps(){
    this.eps.push("EPS Sura");
    this.eps.push("EPS Sanitas");
    this.eps.push("EPS Famisanar");
    this.eps.push("EPS Aliansalud");
    this.eps.push("EPS Coomeva");
    this.eps.push("EPS Salud Total");
    this.eps.push("EPS Compensar");
    this.eps.push("Nueva EPS");
    this.eps.push("EPS Cruz Blanca");
    this.eps.push("EPS S.O.S");

  }

  private cargarTipoSangre(){
    this.tipoSangre.push("A-");
    this.tipoSangre.push("B+");
    this.tipoSangre.push("B-");
    this.tipoSangre.push("O+");
    this.tipoSangre.push("O-");
    this.tipoSangre.push("AB+");
    this.tipoSangre.push("AB-");
    
  }

  public registrar (){
    console.log(this.registroPacienteDTO);
  }

  public sonIguales(): boolean{
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

  public onFileChange(event:any){
    if( event.target.files.length > 0){
      const files = event.target.files;
      console.log(files);
    }
  }



}
