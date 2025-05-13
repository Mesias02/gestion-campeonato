import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component'; // Verifica que esta ruta sea correcta

@NgModule({
  declarations: [
    UserFormComponent // Declarar el componente
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // Importar ReactiveFormsModule para formularios reactivos
  ],
  exports: [
    UserFormComponent // Exportar el componente para usarlo fuera del módulo
  ]
})
export class UserModule {}