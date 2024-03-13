import { Injectable } from '@angular/core';
import { TamadaModel } from '../models/tamada.model';
declare var Email: any;

@Injectable({
  providedIn: 'root',
})
export class TamadaService {
  collection: TamadaModel[] = [];

  constructor() {}

  public addTamada(item: TamadaModel): TamadaModel[] {
    if (item.position == undefined) {
      item.position = this.collection.length + 1;
    }

    return this.reOrderPositions(item);
  }

  public removeItem(item: TamadaModel): TamadaModel[] {
    var existingPositionIndex = this.collection.findIndex(
      (data: TamadaModel) => item.position == data.position
    );

    this.collection.splice(existingPositionIndex, 1);
    for (var i = existingPositionIndex; i < this.collection.length; i++) {
      this.collection[i].position--;
    }

    return this.collection;
  }

  public sendEmail(email: string, htmlData: string | undefined): void {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'g.okruadze@digitalinstitute.ge',
      Password: 'B51ACCE6D0A61867540B954067504A0BDC5F',
      To: email,
      From: 'g.okruadze@digitalinstitute.ge',
      Subject: 'Tamada',
      Body: htmlData,
    }).then((message: any) => alert(message));
  }

  private reOrderPositions(item: TamadaModel) {
    var existingPositionIndex = this.collection.findIndex(
      (data: TamadaModel) => item.position == data.position
    );
    console.log(existingPositionIndex);
    if (existingPositionIndex >= 0) {
      this.collection.splice(existingPositionIndex, 0, item);
      for (var i = existingPositionIndex + 1; i < this.collection.length; i++) {
        this.collection[i].position++;
      }
    } else {
      this.collection.push(item);
    }

    return this.collection;
  }
}
