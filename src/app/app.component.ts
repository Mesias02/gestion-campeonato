import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Agregar esta línea si estás usando componentes standalone
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambiar "styleUrl" a "styleUrls"
})
export class AppComponent {
  title = 'gestion-campeonato';
}