import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Peliculas } from "../peliculas/peliculas";
import { Libros } from "../libros/libros";
import { Maestros } from "../maestros/maestros";
import { Alumnos } from "../alumnos/alumnos";

@Component({
  selector: 'app-inicio',
  imports: [Hero, Peliculas, Libros, Maestros, Alumnos],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
