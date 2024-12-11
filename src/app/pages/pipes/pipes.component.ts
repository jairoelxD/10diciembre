import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  nombre : string='jairo flores';
  porcentaje: number=0.235;
  fecha:Date = new Date();
}