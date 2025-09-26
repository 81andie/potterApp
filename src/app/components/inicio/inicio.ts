import { Component } from '@angular/core';
import { Hero } from "../hero/hero";

@Component({
  selector: 'app-inicio',
  imports: [Hero],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
