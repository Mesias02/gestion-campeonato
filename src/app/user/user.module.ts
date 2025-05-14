import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { UserRoutingModule } from './user-routing.module'; // Importar el módulo de rutas
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    UserFormComponent, // Declarar UserFormComponent
    UserListComponent  // Declarar UserListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Asegúrate de que ReactiveFormsModule esté importado aquí
    UserRoutingModule
  ],
  exports: [
    UserFormComponent,
    UserListComponent
  ]
})
export class UserModule {}