import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Peliculas } from "../peliculas/peliculas";
import { Libros } from "../libros/libros";

@Component({
  selector: 'app-inicio',
  imports: [Hero, Peliculas, Libros],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
