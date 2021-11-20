import { Injectable } from '@angular/core';
import {Usuario} from './usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios : Usuario[] = [
    {
      user: 'afarias',
      password: '123654'
    },
    {
    user: 'bvega',
    password: '456987'
    },
  ];

  constructor() { }

  getUsuario(usuarioInput:string){
    return{ 
      ...this.listaUsuarios.find(usuario => {return usuario.user === usuarioInput})
    }
  }
  
  addUsuario(user : string, password : string){
    this.listaUsuarios.push(
      {
        user,
        password
      }
    );
  }
}
