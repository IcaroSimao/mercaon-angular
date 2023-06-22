import { Component, OnInit } from '@angular/core';
import { ClienteRequest } from '../interface/request/cliente-request';
import { ClienteService } from '../service/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private clienteService: ClienteService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm) {
    if(form.valid){
      this.clienteService.cadastrar(form.value as ClienteRequest).subscribe((response)=>{
        this.toastr.success(response.mensagem)
        this.router.navigateByUrl("/login");
      })
    }
  }
}
