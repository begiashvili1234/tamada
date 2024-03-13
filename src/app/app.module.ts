import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TamadaPgComponent } from './tamada-pg/tamada-pg.component';
import { TamadaFormComponent } from './tamada-pg/tamada-form/tamada-form.component';
import { TamadaTableComponent } from './tamada-pg/tamada-table/tamada-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TamadaPgComponent,
    TamadaFormComponent,
    TamadaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
