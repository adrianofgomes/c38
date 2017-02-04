import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Favoritos } from '../pages/favoritos/favoritos';
import { Page2 } from '../pages/page2/page2';
import { ListaContatosPage } from '../pages/lista-contatos/lista-contatos';
import { ContatoDetalhesPage } from '../pages/contato-detalhes/contato-detalhes';
import { ContatoFilter } from '../components/contato-filter';

@NgModule({
  declarations: [
    MyApp,
    ListaContatosPage,
    ContatoDetalhesPage,
    Favoritos,
    Page2,
    ContatoFilter
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaContatosPage,
    ContatoDetalhesPage,
    Favoritos,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
