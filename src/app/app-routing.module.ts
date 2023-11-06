import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { GestionarCitaComponent} from './pagina/gestionar-cita/gestionar-cita.component';
import { CrearCitaComponent } from './pagina/crear-cita/crear-cita.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';

const routes: Routes = [
  { path: " ", component: InicioComponent},

  { path: "login", component: LoginComponent},
  { path: "registro", component: RegistroComponent},
  { path: "gestion-pqrs", component: GestionPqrsComponent },
  { path: "crear-pqrs", component: CrearPqrsComponent },
  { path: "detalle-pqrs/:codigo", component: DetallePqrsComponent },
  { path: "gestionar-cita", component: GestionarCitaComponent },
  { path: "crear-cita", component: CrearCitaComponent },
  { path: "detalle-cita/:codigo", component: DetalleCitaComponent },
  
  { path: "**", pathMatch: "full", redirectTo:""}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
