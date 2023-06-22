import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteResponse } from 'src/app/interface/response/cliente-response';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: ClienteResponse[] | null = null;

  constructor(private router: Router, private clienteService: ClienteService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clienteService.consultar().subscribe((response) => {
      this.clientes = response.data;
    });
  }

  deletarCliente(cliente: ClienteResponse) {
    this.clienteService.deletar(cliente.cpf).subscribe((response) => {
      this.toastr.success(response.mensagem);
      this.consultarClientes()
    })
  }

}
