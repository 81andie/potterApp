
import { Component, OnInit } from '@angular/core';
import { Magia } from '../../interfaces/hp.interface';
import { CommonModule } from '@angular/common';
import { peticionhpApp } from '../../services/peticionhpApp.service';


declare var AOS: any;
@Component({
  selector: 'app-alumnos',
  imports: [CommonModule],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos implements OnInit {
  estudents: Magia[] = [];

  constructor(private harryPotterService: peticionhpApp) { }

  ngOnInit(): void {
    this.harryPotterService.getStudents().subscribe(data => {
      this.estudents = data.slice(0, 10);
      console.log(this.estudents)
    })

    AOS.init({
      duration: 3000,
      easing: 'ease',
      once: true,
    });
  }
}
