import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { UserFormComponent } from './user/components/user-form/user-form.component';

export const appRoutes: Routes = [
  { path: 'usuarios/nuevo', component: UserFormComponent }
];

export const appRouterProviders = [
  provideRouter(appRoutes)
];