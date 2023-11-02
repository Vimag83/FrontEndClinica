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


  constructor(){
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.eps =[];
    this.cargarEps();
  }

  private cargarEps(){
    this.eps.push("FAMISANAR");
    this.eps.push("caafesalud");
    this.eps.push("sos");

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
