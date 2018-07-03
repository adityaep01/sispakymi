import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { PilihmotorPage } from '../pilihmotor/pilihmotor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pergike(){
  return this.navCtrl.push(AboutPage);
  }

  gotoPilmot(){
  return this.navCtrl.push(PilihmotorPage);
  }
}


