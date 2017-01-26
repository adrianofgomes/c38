import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

}
