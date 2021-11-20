import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from './usuario.service'

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  usuario = {
    user: '',
    password: ''
  };

  campo: string;

  constructor(private router: Router,public toastController: ToastController,private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  addUsuario(){
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario
      }
    };

    if(this.validateModel(this.usuario)){
      this.usuarioService.addUsuario(this.usuario.user.valueOf(),
        this.usuario.password.valueOf()
      );
      this.presentToast('Usuario creado correctamente');
      console.log(this.usuarioService.listaUsuarios)
      this.router.navigate(['/login'],navigationExtras);      
    }
  }

  /**
 * Muestra un toast al usuario (mensaje flotante)
 * @param message Mensaje a presentar al usuario
 * @param duration Duración el toast, este es opcional
 */
    async presentToast(message: string, duration?: number){
      const toast = await this.toastController.create(
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
