import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Inicio } from "./components/inicio/inicio";
import { Footer } from "./components/footer/footer";
import { Libros } from "./components/libros/libros";
import { Peliculas } from "./components/peliculas/peliculas";
import { Hero } from "./components/hero/hero";
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Inicio, Footer, Libros, Peliculas, Hero, TranslocoModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('potterApp');
}
