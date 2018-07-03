import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IdentifikasiPage } from '../identifikasi/identifikasi';

@Component({
  selector: 'page-pilihmotor',
  templateUrl: 'pilihmotor.html'
})

export class PilihmotorPage {

  constructor(public navCtrl: NavController) {

  }

  gotoIden() {
  return this.navCtrl.push(IdentifikasiPage)
  }


}