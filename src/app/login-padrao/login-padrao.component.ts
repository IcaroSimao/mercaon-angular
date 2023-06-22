import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { AutenticadorService } from '../service/autenticador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-padrao',
  templateUrl: './login-padrao.component.html',
  styleUrls: ['./login-padrao.component.css']
})
export class LoginPadraoComponent implements OnInit {
  
  constructor(private loginService: LoginService, private auth: AutenticadorService, private route: Router) { }


  ngOnInit(): void {

  }

  logar(loginRequest: any) {
    this.loginService.logar(loginRequest).subscribe((response) => {
      this.auth.salvarUsuario(response.data);
      // REDIRECIONAR PARA O DASHBOARD
      this.route.navigateByUrl('dashboard')
    });
    
  }

}
