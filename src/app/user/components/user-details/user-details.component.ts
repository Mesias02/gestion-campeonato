import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  // Definir la propiedad 'user' con datos iniciales
  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    role: 'Administrador'
  };

  // Método para manejar el botón "Volver"
  goBack() {
    console.log('Volver a la lista de usuarios');
    // Aquí puedes implementar la lógica para regresar a la vista anterior
  }
}