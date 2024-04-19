import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril19Angular';
}
