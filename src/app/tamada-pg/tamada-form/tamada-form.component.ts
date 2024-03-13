import { Component, EventEmitter, Output } from '@angular/core';
import { TamadaModel } from '../models/tamada.model';

@Component({
  selector: 'app-tamada-form',
  templateUrl: './tamada-form.component.html',
  styleUrl: './tamada-form.component.css'
})
export class TamadaFormComponent {
  tamadaModelItem:TamadaModel = new TamadaModel();
  @Output()
  tamadaFormSubmitEvent:EventEmitter<TamadaModel>;

  constructor(){
    this.tamadaFormSubmitEvent = new EventEmitter();
  }

  onFormSubmit(){
    if(this.tamadaModelItem.position){
      this.tamadaModelItem.position = Number(this.tamadaModelItem.position)
    }
    
    this.tamadaFormSubmitEvent.emit(this.tamadaModelItem);
    this.tamadaModelItem = new TamadaModel();
  }
}
