import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { MisCitasComponent } from './componentes/mis-citas/mis-citas.component';
import { AgendarCitasComponent } from './componentes/agendar-citas/agendar-citas.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuPersonalComponent } from './componentes/menu-personal/menu-personal.component';
import { HomeUsuarioComponent } from './componentes/home-usuario/home-usuario.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCitasComponent} from './componentes/menu-citas/menu-citas.component'



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'navegacion',component:NavegacionComponent},
  {path:'mis-citas',component:MisCitasComponent},
  {path: 'agendar-citas',component:AgendarCitasComponent},
  {path: 'login', component:LoginComponent},
  {path:'menu-personal',component:MenuPersonalComponent},
  {path:'home-usuario',component:HomeUsuarioComponent},
  {path:'registro',component:RegistroComponent},
  {path: 'menu-citas', component: MenuCitasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
