import { Component } from '@angular/core';
import { ComentariosHijoComponent } from './comentarios-hijo/comentarios-hijo.component';
import { ComentariosPadreComponent } from './comentarios-padre/comentarios-padre.component';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [ComentariosHijoComponent,ComentariosPadreComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

}
