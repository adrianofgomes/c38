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
		this.carregarFavoritos();
	}

	carregarFavoritos() {
		NativeStorage.getItem('favoritos').then(
			favoritos => { this.contatos = favoritos },
			error => {
				if (error.code.code === 2) {
					NativeStorage.setItem('favoritos', []).then(
						() => this.carregarFavoritos(),
						error => console.error('Error storing item', error)
					);
				} else {
					console.error('Error retrieving item', error);
				}
			}
		);
	}

	abrirDetalhe(contato) {
		this.navCtrl.push(ContatoDetalhesPage, { contato });
	}

}
