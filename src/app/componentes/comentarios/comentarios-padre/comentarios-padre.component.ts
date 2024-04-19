import { Component } from '@angular/core';
import { ComentariosHijoComponent } from '../comentarios-hijo/comentarios-hijo.component';

@Component({
  selector: 'app-comentarios-padre',
  standalone: true,
  imports: [ComentariosHijoComponent],
  templateUrl: './comentarios-padre.component.html',
  styleUrl: './comentarios-padre.component.css'
})
export class ComentariosPadreComponent {
  comentarios:string[]=[];

recibirValor(comentario:string){
  if(comentario==""){

  } else {
    this.comentarios.push(comentario);
  }
    
} 

}
