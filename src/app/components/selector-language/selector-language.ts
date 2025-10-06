import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from '../../services/languageService.service';
import { TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selector-language',
  templateUrl: './selector-language.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./selector-language.css'] // <-- era "styleUrl"
})
export class SelectorLanguageComponent implements OnInit {
  myForm!: FormGroup;

  options = [
    { language: 'English', value: 'en' },
    { language: 'Español', value: 'es' },
    { language: 'Català', value: 'ca' }
  ];

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      language: [this.languageService.getActiveLanguage() || 'en']
    });

    // Si quieres que se cambie el idioma automáticamente al cambiar el valor del formulario
    this.myForm.get('language')?.valueChanges.subscribe(lang => {
      this.onLanguageChange(lang);
    });
  }

  onLanguageChange(selectedLanguage: string): void {
    const currentLanguage = this.languageService.getActiveLanguage();

    if (selectedLanguage !== currentLanguage) {
      this.languageService.setLanguage(selectedLanguage);
      this.translocoService.setActiveLang(selectedLanguage);
      console.log(`Idioma cambiado a: ${selectedLanguage}`);
    } else {
      console.log(`El idioma ya está activo: ${selectedLanguage}`);
    }
  }
}
