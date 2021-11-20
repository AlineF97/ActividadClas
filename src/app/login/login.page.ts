import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras } from '@angular/router';
import{UsuarioService} from './registro-usuario/usuario.service';
import { NavController, ToastController } from '@ionic/angular';
import { Usuario } from './registro-usuario/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    usuario:'',
    password:''
  };
   usuarioServiceS: Usuario;

   campo: string;

  constructor(private usuarioService: UsuarioService,private router: Router, private toastCtrl: ToastController, navCtrl: NavController) { }

  ngOnInit() {
  }

  ingresar(){
    const navigationExtras : NavigationExtras = {
      state :{
        user: this.user
      }
    };
    if(this.validateModel(this.user)){
      this.usuarioServiceS=this.usuarioService.getUsuario(this.user.usuario);
      if(this.usuarioService.getUsuario(this.user.usuario).password===this.user.password){
        this.router.navigate(['/menu/bienvenida'],navigationExtras);
        localStorage.setItem('ingresado','true');
      }else{
        this.presentToast('Usuario o contraseña no validos');
      }
    }else{
      this.presentToast('Falta completar: '+this.campo);
    }
  }


  /**
 * Muestra un toast al usuario (mensaje flotante)
 * @param message Mensaje a presentar al usuario
 * @param duration Duración el toast, este es opcional
 */
   async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create(
      {
        message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
/**
 * validateModel sirve para validar que se ingrese algo en los
 * campos del html mediante su modelo
 */
validateModel(model: any){
// Recorro todas las entradas que me entrega Object.entries y obtengo su valor
  for (var [key, value] of Object.entries(model)) {
    // Si un valor es "" se retornara false y se avisara de lo faltante
    if (value==='') {
      // Se asigna el campo faltante
      this.campo=key;
      // Se retorna false
      return false;      
    }
  }
    return true;
}

}
