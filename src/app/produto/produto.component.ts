import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoResponse } from '../model/response/produto-response';
import { ProdutoService } from '../service/produto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: ProdutoResponse[] | null = null;

  constructor(private router: Router, private produtoService: ProdutoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.consultarProdutos();
  }

  consultarProdutos() {
    this.produtoService.consultar().subscribe((response) => {
      this.produtos = response.data;
    });
  }

  irPara(rota: string) {
    this.router.navigate([rota]);
  }

  deletarProduto(produto: ProdutoResponse) {
    this.produtoService.deletar(produto.id.toString()).subscribe((response) => {
      this.toastr.success(response.mensagem);
      this.consultarProdutos()
    })
  }
}
