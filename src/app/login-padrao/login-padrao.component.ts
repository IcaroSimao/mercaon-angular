import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login-padrao',
  templateUrl: './login-padrao.component.html',
  styleUrls: ['./login-padrao.component.css']
})
export class LoginPadraoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.consultarTodos().subscribe((response)=>{
      console.log(response);
    });
  }

  logar() {
    localStorage.setItem('usuario', 'ola mundo');
  }

}
