import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TamadaModel } from '../models/tamada.model';
import Swal from 'sweetalert2'
import { TamadaService } from '../services/tamada.service';

@Component({
  selector: 'app-tamada-table',
  templateUrl: './tamada-table.component.html',
  styleUrl: './tamada-table.component.css',
})
export class TamadaTableComponent {
  @Input()
  collection!: TamadaModel[];

  @Output()
  removeItemEvent: EventEmitter<TamadaModel> = new EventEmitter();

  constructor(private tamadaService:TamadaService){}

  onDeleteBtnClick(item: TamadaModel) {
    this.removeItemEvent.emit(item);
  }

  showModalBtnClick() {
    Swal.fire({
      title: 'შეიყვანეთ მიმღების ელ.ფოსტა',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: false,
      confirmButtonText: 'გაგზავნა',
      showLoaderOnConfirm: true,
      preConfirm: async (email: any) => {
       console.log(email);
       var tableData:HTMLElement | null = document.querySelector("#tableTamada");
       this.tamadaService.sendEmail(email,tableData?.innerHTML);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
}
