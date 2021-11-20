import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSelacionado : number = 0; 

  paginas = [
    {
      titulo: 'Bienvenida',
      url: '/menu/bienvenida',
      icono: 'home'
    },
    {
      titulo: 'Calculadora',
      url: '/menu/calculadora',
      icono: 'calculator'
    },
    {
      titulo: 'Calculadora formulario',
      url: '/menu/calc-form',
      icono: 'calculator'
    }
  ];

  constructor(public alertCtrl: AlertController, public navCtrl :  NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSelacionado(i){
    this.indiceSelacionado = i;
  }

  async salir(){
    const alert = await this.alertCtrl.create({
      header : 'Salir',
      message : '¿Estas seguro de salir?',
      buttons: [
        {
          text : 'No',
          handler: () => {

          }
        },
        {
          text : 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
  }




}
