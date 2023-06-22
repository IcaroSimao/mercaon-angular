import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioAdminRequest } from 'src/app/interface/request/usuario-admin-request';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-criar-admin',
  templateUrl: './criar-admin.component.html',
  styleUrls: ['./criar-admin.component.css']
})
export class CriarAdminComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private toastr: ToastrService, private location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  criar(form: NgForm) {
    const request = form.value as UsuarioAdminRequest;
    this.usuarioService.cadastrarAdmin(request).subscribe((response) => {
      this.router.navigateByUrl('dashboard');
      this.toastr.success(response.mensagem);
    });
  }

  telaAnterior() {
    this.location.back();
  }

}
