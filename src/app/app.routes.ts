import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { AppComponent } from './app.component';
import { DondeEstamosComponent } from './componentes/donde-estamos/donde-estamos.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


export const routes: Routes = [
    {path:'quienesSomos',component:QuienesSomosComponent},
    {path:'inicio',component:InicioComponent},
    {path:'dondeEstamos',component:DondeEstamosComponent},
    {path:'comentarios',component:ComentariosComponent}

];
