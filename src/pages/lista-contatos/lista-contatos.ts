import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContatoDetalhesPage } from '../contato-detalhes/contato-detalhes';

/*
  Generated class for the ListaContatos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-contatos',
  templateUrl: 'lista-contatos.html'
})
export class ListaContatosPage {

  contatos: Array<{nome: string, ramal: string, lotacao: string, cargo: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contatos = [
      { nome: 'José', ramal: '1234', lotacao: 'ATI/DESIS3', cargo: 'Coordenador' },
      { nome: 'Maria', ramal: '2222', lotacao: 'ATI/DESIS3', cargo: null },
      { nome: 'Fulano', ramal: '4567', lotacao: 'GP', cargo: 'Chefe de Departamento' },
      { nome: 'José', ramal: '1234', lotacao: 'ATI/DESIS3', cargo: 'Coordenador' },
      { nome: 'Maria', ramal: '2222', lotacao: 'ATI/DESIS3', cargo: null },
      { nome: 'Fulano', ramal: '4567', lotacao: 'GP', cargo: 'Chefe de Departamento' },
      { nome: 'José', ramal: '1234', lotacao: 'ATI/DESIS3', cargo: 'Coordenador' },
      { nome: 'Maria', ramal: '2222', lotacao: 'ATI/DESIS3', cargo: null },
      { nome: 'Fulano', ramal: '4567', lotacao: 'GP', cargo: 'Chefe de Departamento' },
      { nome: 'José', ramal: '1234', lotacao: 'ATI/DESIS3', cargo: 'Coordenador' },
      { nome: 'Maria', ramal: '2222', lotacao: 'ATI/DESIS3', cargo: null },
      { nome: 'Fulano', ramal: '4567', lotacao: 'GP', cargo: 'Chefe de Departamento' },
    ];

  }

  abrirDetalhe(contato){
    this.navCtrl.push(ContatoDetalhesPage, {contato});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaContatosPage');
  }

}
