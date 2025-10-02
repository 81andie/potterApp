import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Magia, Spell } from "../interfaces/hp.interface";

@Injectable({ providedIn: 'root' })

export class peticionhpApp{

  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  private apiUrlEstudiantes = 'https://hp-api.onrender.com/api/characters/students';

  private apiUrlTeachers = 'https://hp-api.onrender.com/api/characters/staff';

  private apiUrlSpells = 'https://hp-api.onrender.com/api/spells';


   constructor(private http: HttpClient) { }

  getCharacters(): Observable<Magia[]> {
    return this.http.get<Magia[]>(this.apiUrl);
  }

  getStudents(): Observable<Magia[]> {
    return this.http.get<Magia[]>(this.apiUrlEstudiantes)
  }

  getStaff(): Observable<Magia[]> {
    return this.http.get<Magia[]>(this.apiUrlTeachers)
  }

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.apiUrlSpells).pipe(
      map((spells) =>
        spells.map((spell) => ({
          ...spell,
          image: this.getSpellImage(spell.name)
        })))
    )
  }


  private getSpellImage(name: string): string {
    if (!name) return 'assets/images/spells.png';

    const images: { [key: string]: string } = {
      "Aberto": '/aberto.jpg',
      "Accio": '/accio.jpg',
      "Aguamenti": '/aguamenti.jpg',
      "Alohomora": '/alohomora.jpg',
      "Anapneo": '/anapneo.jpg',
      "Aparecium": '/aparecium.jpg',
      "Apparate": '/apparate.jpg',
      "Ascendio": '/ascendio.jpg',
      "Avada Kedavra":'/avadaKedavra.jpg',
      "Avis":'/avis.jpg',
      "Bat": '/bat.jpg',
      "Bombardo":'/bombar.jpeg',
      "Brackium Emendo": '/brackiumEmendo.jpg',
      "Capacious Extremis": '/capaciusExtremis.jpg',
      "Confundo": '/confundo.jpg',
      "Conjunctivitis Curse": '/conjuctivitisCurse.jpg',
      "Crinus Muto": '/crinusmuto.jpg',
      "Crucio": '/crucio.jpg',
      "Diffindo": '/diffindo.jpg',
      "Disapparate":'/disaparrate.webp',
      "Engorgio": '/engorgio.jpg',
      "Episkey": '/episkey.jpg',
      "Expecto patronum":'/expectopatronum.jpg',
      "Erecto": '/erecto.webp',
      "Evanesco": '/evanesco.jpg',
      "Expelliarmus": '/expelliarmus.jpg',
      "Ferula": '/ferula.jpg',
      "Fidelius Charm": '/fideliusCharm.jpg',
      "Fiendfyre Curse": '/fiendfire.jpg',
      "Finite Incantatem": '/finiteincantatem.jpg',
      "Furnunculus Curse": '/furnunculos.jpg',
      "Geminio": '/geminio.jpg',
      "Glisseo": '/glisseo.jpg',
      "Homenum Revelio": '/homenumrevelio.jpg',
      "Homonculus Charm": '/homonculuscharm.jpg',
      "Immobulus": '/immobulus.jpg',
      "Impedimenta": '/impedimenta.jpg',
      "Imperio": '/imperio.jpg',
      "Impervius": '/impervius.jpg',
      "Incarcerous": '/incarcerous.jpg',
      "Incendio": '/incendio.jpg',
      "Langlock": '/langlock.jpg',
      "Legilimens": '/legiliments.jpg',
      "Levicorpus": '/levicorpus.jpg',
      "Locomotor Mortis": '/locomotormortis.webp',
      "Lumos": '/lumos.jpg',
      "Morsmordre": '/morsmordre.jpg',
      "Mucus Ad Nauseam": '/mucusandnauseam.png',
      "Muffliato": '/Muffliato.jpg',
      "Nox": '/nox.gif',
      "Obliviate": '/obliviate.jpg',
      "Oculus Reparo": '/occulusreparo.jpg',
      "Oppugno": '/oppugno.jpg',
      "Periculum": '/periculum.jpg',
      "Petrificus Totalus": '/petrificustotalus.jpg',
      "Piertotum Locomotor": '/piertotumlocomotor.jpg',
      "Protean Charm": '/proteancharm.webp',
      "Protego": '/protego.jpg',
      "Reducio": '/reducto.jpg',
      "Renneverate":'/rennervate.jpg',
      "Reparifors":'/reparifors.webp',
      "Reparo":'/reparo.jpg',
      "Rictusempra":'/rictussempra.jpg',
      "Riddikulus":'/riddiculus.jpg',
      "Scourgify":'/scourgify.webp',
      "Sectumsempra":'/sectumsempra.jpg',
      "Serpensortia":'/serpersortia.jpg',
      "Silencio":'/silencio.jpg',
      "Sonorus":'/sonorus.webp',
      "Spongify":'/sponfigy.webp',
      "Stupefy":'/stupefy.jpg',
      "Tarantallegra":'/tarantallegra.jpg',
      "Ubreakable Vow":'/ubreakablevow.webp',
      "Wingardium Leviosa":'/wingardiumleviosa.jpg',


    }

    return images[name] || '/spells.png';
  }




}
