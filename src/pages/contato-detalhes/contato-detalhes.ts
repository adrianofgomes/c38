import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';

/*
  Generated class for the ContatoDetalhes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contato-detalhes',
  templateUrl: 'contato-detalhes.html'
})
export class ContatoDetalhesPage {

  contato: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contato = this.navParams.get('contato');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoDetalhesPage');
  }

  favoritar() {
    NativeStorage.getItem('favoritos').then(favoritos => {
      favoritos.push(this.contato);
      NativeStorage.setItem('favoritos', favoritos).then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
    },
      error => console.error(error)
    );
  }

}
