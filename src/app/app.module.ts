import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InstitucionalComponent } from './componentes/institucional/institucional.component';
import { AgendarCitasComponent } from './componentes/agendar-citas/agendar-citas.component';
import { MisCitasComponent } from './componentes/mis-citas/mis-citas.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuPersonalComponent } from './componentes/menu-personal/menu-personal.component';
import { CitasPendientesComponent } from './componentes/citas-pendientes/citas-pendientes.component';
import { CitasPorConfirmarComponent } from './componentes/citas-por-confirmar/citas-por-confirmar.component';
import { ExpedientesComponent } from './componentes/expedientes/expedientes.component';
import { HomeUsuarioComponent } from './componentes/home-usuario/home-usuario.component';
import { HomePersonalComponent } from './componentes/home-personal/home-personal.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCitasComponent } from './componentes/menu-citas/menu-citas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacionComponent,
    InstitucionalComponent,
    AgendarCitasComponent,
    MisCitasComponent,
    LoginComponent,
    MenuPersonalComponent,
    CitasPendientesComponent,
    CitasPorConfirmarComponent,
    ExpedientesComponent,
    HomeUsuarioComponent,
    HomePersonalComponent,
    RegistroComponent,
    MenuCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
