import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioResponse } from 'src/app/model/response/usuario-response';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: UsuarioResponse[] | null = null;

  constructor(private usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.consultarUsuarios();
  }

  consultarUsuarios() {
    this.usuarioService.consultar().subscribe((response) => {
      this.usuarios = response.data;
    });
  }

  deletarUsuario(usuario: UsuarioResponse) {
    this.usuarioService.deletar(usuario.id.toString()).subscribe((response) => {
      this.toastr.success(response.mensagem);
      this.consultarUsuarios()
    })
  }

  recuperarNivelFormatado(nivel: string): String {
    switch (nivel) {
      case "A":
        return "Admin";
      case "C":
        return "Cliente";
      default:
        return "Não mapeado";
    }

  }

}
