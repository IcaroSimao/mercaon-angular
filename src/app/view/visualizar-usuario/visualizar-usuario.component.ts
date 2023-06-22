import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioAlterarSenhaRequest } from 'src/app/model/request/usuario-alterar-senha-request';
import { UsuarioResponse } from 'src/app/model/response/usuario-response';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-visualizar-usuario',
  templateUrl: './visualizar-usuario.component.html',
  styleUrls: ['./visualizar-usuario.component.css']
})
export class VisualizarUsuarioComponent implements OnInit {

  id: string | null = null;

  usuario: UsuarioResponse | null = null;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private location: Location, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.usuarioService.consultarPorId(this.id as string).subscribe((response) => {
        if (response.data == null) {
          this.router.navigateByUrl('usuario');
        } else {
          this.usuario = response.data;
        }
      });
    }
  }

  telaAnterior() {
    this.location.back();
  }

  alterarSenha(form: NgForm) {
    const request = form.value as UsuarioAlterarSenhaRequest;
    request.id = this.usuario?.id as number;
    this.usuarioService.alterarSenha(request).subscribe((response) => {
      this.toastr.success(response.mensagem);
      this.telaAnterior();
    });
  }

}
