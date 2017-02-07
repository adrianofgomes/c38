import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import { ContatoDetalhesPage } from '../contato-detalhes/contato-detalhes';

@Component({
	selector: 'page-favoritos',
	templateUrl: '../lista-contatos/lista-contatos.html'
})
export class Favoritos {

	contatos: Array<{ nome: string, ramal: string, lotacao: string, nomeCargo: string }> = [];

	filtro: string = '';

	constructor(public navCtrl: NavController) {
		NativeStorage.getItem('favoritos').then(
			favoritos => { this.contatos = favoritos },
			error => console.error(error)
		);
	}

	abrirDetalhe(contato){
    this.navCtrl.push(ContatoDetalhesPage, {contato});
  }

}
