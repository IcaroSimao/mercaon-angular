import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteRequest } from 'src/app/interface/request/cliente-request';
import { ClienteResponse } from 'src/app/interface/response/cliente-response';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.css']
})
export class VisualizarClienteComponent implements OnInit {

  cliente: ClienteResponse | null = null;
  cpf: string | null = null;

  @ViewChild('form') form: NgForm | undefined;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private location: Location, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cpf = this.route.snapshot.paramMap.get('cpf');

    if (this.cpf != null) {
      this.clienteService.consultarPorCpf(this.cpf).subscribe((response) => {
        if (response.data == null) {
          this.router.navigateByUrl('cliente');
        } else {
          this.cliente = response.data;
          this.form?.controls['nome'].setValue(this.cliente.nome);
          this.form?.controls['cpf'].setValue(this.cliente.cpf);
          this.form?.controls['complemento'].setValue(this.cliente.complemento);
          this.form?.controls['numero'].setValue(this.cliente.numero);
          this.form?.controls['endereco'].setValue(this.cliente.endereco);
          this.form?.controls['cep'].setValue(this.cliente.cep);
          this.form?.controls['bairro'].setValue(this.cliente.bairro);
          this.form?.controls['telefone'].setValue(this.cliente.telefone);
        }
      });
    }
  }

  telaAnterior() {
    this.location.back();
  }

  alterar(form: NgForm) {
    const request = form.value as ClienteRequest;
    request.email = this.cliente?.email as string;
    this.clienteService.alterar(request).subscribe((response) => {
      this.toastr.success(response.mensagem);
    });
  }

}
