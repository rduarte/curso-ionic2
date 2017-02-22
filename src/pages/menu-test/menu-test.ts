import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lowercase } from '../../pipes/lowercase'

@Component({
  selector: 'page-menu-test',
  templateUrl: 'menu-test.html'
})
export class MenuTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
