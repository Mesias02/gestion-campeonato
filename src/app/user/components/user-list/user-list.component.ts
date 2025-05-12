import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // Declarar como standalone
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule] // Importar dependencias necesarias
})
export class UserListComponent {
  users = [
    { name: 'Juan Pérez', email: 'juan.perez@example.com', role: 'Administrador' },
    { name: 'María López', email: 'maria.lopez@example.com', role: 'Usuario' },
    { name: 'Carlos García', email: 'carlos.garcia@example.com', role: 'Usuario' }
  ];

  editUser(user: any) {
    console.log('Editar usuario:', user);
  }

  deleteUser(user: any) {
    console.log('Eliminar usuario:', user);
  }
}