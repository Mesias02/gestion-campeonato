import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class UserFormComponent {
  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  submitForm() {
    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}