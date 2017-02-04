import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContatoDetalhesPage } from '../contato-detalhes/contato-detalhes';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ContatoFilter } from '../../components/contato-filter';

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

  private url: string = "http://web.tst.bndes.net/c38/rest/entity/colaborador/findAll";

  contatos: Array<{nome: string, ramal: string, lotacao: string, nomeCargo: string}>;

  colaboradores: Array<any>;

  filtro: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.contatos = [
      { nome: 'José', ramal: '1234', lotacao: 'ATI/DESIS3', nomeCargo: 'Coordenador' },
      { nome: 'Maria', ramal: '2222', lotacao: 'ATI/DESIS3', nomeCargo: null },
      { nome: 'Fulano', ramal: '4567', lotacao: 'GP', nomeCargo: 'Chefe de Departamento' },
      { nome: 'José', ramal: '1234', lotacao: 'ATI/DESIS3', nomeCargo: 'Coordenador' },
      { nome: 'Maria', ramal: '2222', lotacao: 'ATI/DESIS3', nomeCargo: null },
      { nome: 'Fulano', ramal: '4567', lotacao: 'GP', nomeCargo: 'Chefe de Departamento' },
      { nome: 'José', ramal: '1234', lotacao: 'ATI/DESIS3', nomeCargo: 'Coordenador' },
      { nome: 'Maria', ramal: '2222', lotacao: 'ATI/DESIS3', nomeCargo: null },
      { nome: 'Fulano', ramal: '4567', lotacao: 'GP', nomeCargo: 'Chefe de Departamento' },
    ];

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.colaboradores = data.entity;
      }); 
  }

  abrirDetalhe(contato){
    this.navCtrl.push(ContatoDetalhesPage, {contato});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaContatosPage');
  }

}
