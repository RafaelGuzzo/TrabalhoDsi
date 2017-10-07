import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastraComponent } from './cadastra/cadastra.component';
import { ListaComponent } from './lista/lista.component';
import { DeletaComponent } from './deleta/deleta.component';
import { AlteraComponent } from './altera/altera.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastraComponent,
    ListaComponent,
    DeletaComponent,
    AlteraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
