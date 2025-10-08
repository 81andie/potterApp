import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var AOS: any;


@Component({
  selector: 'app-hero',
  imports: [RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  }



}
