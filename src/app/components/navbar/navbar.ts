import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { SelectorLanguageComponent } from "../selector-language/selector-language";
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, SelectorLanguageComponent,TranslocoModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(private transloco: TranslocoService) {
  console.log('Idioma activo:', this.transloco.getActiveLang());
  console.log('menu.inici:', this.transloco.translate('menu.inici'));
}

}
