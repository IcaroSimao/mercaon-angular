import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticadorService } from 'src/app/service/autenticador.service';

@Component({
  selector: 'navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {

  constructor(private auth: AutenticadorService) { }

  ngOnInit(): void {
  }

  adminLogado(): Boolean {
    return this.auth.usuarioAdmin();
  }

  clienteLogado(): Boolean {
    return this.auth.usuarioCliente();
  }

  deslogar() {
    this.auth.deslogar();
  }

}
