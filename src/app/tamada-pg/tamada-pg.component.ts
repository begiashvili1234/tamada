import { Component } from '@angular/core';
import { TamadaModel } from './models/tamada.model';
import { TamadaService } from './services/tamada.service';

@Component({
  selector: 'app-tamada-pg',
  templateUrl: './tamada-pg.component.html',
  styleUrl: './tamada-pg.component.css'
})
export class TamadaPgComponent {
  collection!:TamadaModel[];;

  constructor(private tamadaService:TamadaService){}

  tamadaFormSubmitSubs(event:TamadaModel){
    this.collection = this.tamadaService.addTamada(event);
    console.log(this.collection);
  }

  removeItemSubs(event:TamadaModel){
    this.collection = this.tamadaService.removeItem(event);
  }
}
