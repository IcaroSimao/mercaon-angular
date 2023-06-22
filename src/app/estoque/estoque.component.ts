import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstoqueResponse } from '../model/response/estoque-response';
import { EstoqueService } from '../service/estoque.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  estoques: EstoqueResponse[] | null = null;

  constructor(private router: Router, private estoqueService: EstoqueService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.consultarEstoques();
  }

  consultarEstoques() {
    this.estoqueService.consultar().subscribe((response) => {
      this.estoques = response.data;
    });
  }

  irPara(rota: string) {
    this.router.navigate([rota]);
  }

  deletarEstoque(estoque: EstoqueResponse) {
    this.estoqueService.deletar(estoque.id.toString()).subscribe((response) => {
      this.toastr.success(response.mensagem);
      this.consultarEstoques()
    })
  }

}
