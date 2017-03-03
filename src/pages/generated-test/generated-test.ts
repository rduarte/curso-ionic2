import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service'

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html'
})
export class GeneratedTestPage {

  cep: string = '?';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private connectionService: ConnectionService) {}

  pedirCep(): void{
    let alert = this.alertCtrl.create({
      'title': 'CEP',
      'message': 'Digite o seu CEP',
      'inputs': [
        { name: 'cep', placeholder: 'Seu CEP'}
      ],
      'buttons': [
        {
          text: "Ok", handler: (data) => {
            this.buscarCep(data.cep);
          }
        }
      ]
    });
    alert.present();
  }

  buscarCep(cep: string): void{
    this.connectionService.getCep(cep+'')
      .then((res) => {
        let json = res.json();
        console.log(json.localidade);
      }).catch((err) => {
        console.log(err);
      });
  }

}
