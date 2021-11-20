import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.page.html',
  styleUrls: ['./calc-form.page.scss'],
})
export class CalcFormPage implements OnInit {

  formularioCalculadora : FormGroup;

  constructor(public fb: FormBuilder, public alertCtrl: AlertController,public toastCtrl: ToastController) { 
    this.formularioCalculadora = this.fb.group({
      valor1 : new FormControl("",Validators.required),
      valor2 : new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async sumar(valor1: number, valor2: number,resultado : number){
    var f = this.formularioCalculadora.value;
    
    if(this.formularioCalculadora.invalid){
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        message:'Debe completar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    valor1 = parseInt(f.valor1);
    valor2 = parseInt(f.valor2);
    resultado = valor1 + valor2;
    return this.mensajeSalida('El resultado es: ' + resultado);   
  }


  async restar(valor1: number, valor2: number, resultado : number){
    var f = this.formularioCalculadora.value;
    
    if(this.formularioCalculadora.invalid){
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        message:'Debe completar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return 
    }

    valor1 = f.valor1;
    valor2 = f.valor2;
    resultado = valor1-valor2;
    
    return this.mensajeSalida('El resultado es: ' + resultado);
    
  }

  async multiplicar(valor1: number, valor2: number, resultado : number ){
    var f = this.formularioCalculadora.value;
    
    if(this.formularioCalculadora.invalid){
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        message:'Debe completar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return 
    }

    valor1 = f.valor1;
    valor2 = f.valor2;
    resultado = valor1*valor2;
    return this.mensajeSalida('El resultado es: ' + resultado);
  }

  async dividir(valor1: number, valor2: number, resultado: number){
    var f = this.formularioCalculadora.value;

    
    if(this.formularioCalculadora.invalid){
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        message:'Debe completar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return this.mensajeSalida('El resultado es: ' + resultado);
    }

    valor1 = f.valor1;
    valor2 = f.valor2;
    resultado = valor1/valor2;

    if(valor2==0){
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        message:'El divisor debe ser distinto a 0',
        buttons: ['Aceptar']
      });
      await alert.present();
      return 
    }
    return this.mensajeSalida('El resultado es: ' + resultado);
  }


  async mensajeSalida(message:string){
    const alert = await this.alertCtrl.create({
      header: 'Resultado',
      message,
      buttons: ['Aceptar']
    });
    await alert.present();
    return 
  }

  formReset() {
    this.formularioCalculadora.reset();
  }



}
