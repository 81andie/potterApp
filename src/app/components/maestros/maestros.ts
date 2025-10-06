import { Component,OnInit} from '@angular/core';
import { peticionhpApp } from '../../services/peticionhpApp.service';
import { Magia } from '../../interfaces/hp.interface';

declare var AOS: any;

@Component({
  selector: 'app-maestros',
  imports: [],
  templateUrl: './maestros.html',
  styleUrl: './maestros.css'
})
export class Maestros implements OnInit {
 staff: Magia[]=[];

  constructor (private harryPotterService: peticionhpApp){ }


  ngOnInit(): void {
    this.harryPotterService.getStaff().subscribe(data =>{
      this.staff = data.slice(0,9);
      console.log(this.staff)
    })

    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });

}
}
