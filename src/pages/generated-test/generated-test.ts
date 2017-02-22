import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service'

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html'
})
export class GeneratedTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private connectionService: ConnectionService) {}

  buscarCep() : void{
    this.connectionService.getCep('88704290')
      .then((res) => {
        let json = res.json();
        console.log(json.localidade);
      }).catch((err) => {
        console.log(err);
      });
  }

}
