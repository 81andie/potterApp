import { Component, OnInit } from '@angular/core';
import { Magia ,Spell } from '../../interfaces/hp.interface';
import { peticionhpApp } from '../../services/peticionhpApp.service';
import { CommonModule } from '@angular/common';

declare var AOS: any;

@Component({
  selector: 'app-hechizos',
  imports: [CommonModule],
  templateUrl: './hechizos.html',
  styleUrl: './hechizos.css'
})


export class Hechizos {

  spells: Spell[]=[];
  constructor (private harryPotterService: peticionhpApp){ }


  ngOnInit(): void {
  this.getSpell();


  AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true,
    threshold: 0.5,

  })

}


getSpell(){
  this.harryPotterService.getSpells().subscribe((data: Spell[]) =>{
    this.spells = data;
    console.log(this.spells)

  })

}

}
