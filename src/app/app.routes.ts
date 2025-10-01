import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Maestros } from './components/maestros/maestros';
import { Alumnos } from './components/alumnos/alumnos';
import { Hechizos } from './components/hechizos/hechizos';
import { ErrorPage } from './components/error-page/error-page';


export const routes: Routes = [

  {
    path: 'inicio',
    component: Inicio
  },

  {
    path: 'maestros',
    component: Maestros
  },

  {
    path: 'alumnos',
    component: Alumnos
  },

  {
    path: 'hechizos',
    component: Hechizos
  },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: '**', component: ErrorPage }

];



