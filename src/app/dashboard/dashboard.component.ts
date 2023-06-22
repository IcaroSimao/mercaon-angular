import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstoqueService } from '../service/estoque.service';
import { EstoqueResponse } from '../model/response/estoque-response';
import { ProdutoResponse } from '../model/response/produto-response';
import { ProdutoService } from '../service/produto.service';
import { LocalStorageKeys } from '../enum/local-storage-keys';
import { ToastrService } from 'ngx-toastr';
import { AutenticadorService } from '../service/autenticador.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produtos: ProdutoResponse[] | null = null;
  
  constructor(private route: Router, private produtoService: ProdutoService, private toastr: ToastrService, private auth: AutenticadorService) { }

  public sidebarShow: boolean = false;

  ngOnInit(): void {
    this.consultarProdutos();
  }

  consultarProdutos() {
    this.produtoService.consultar().subscribe((response) => {
      this.produtos = response.data;
    });
  }

  irPara(rota: string) {
    this.route.navigate([rota]);
  }

  adicionarAoCarrinho(produto: ProdutoResponse) {
    let carrinho = localStorage.getItem(LocalStorageKeys.cart);
    if(carrinho){
      let carrinhoItens = JSON.parse(carrinho || "") as ProdutoResponse[];
      if(carrinhoItens.map(c => c.id).includes(produto.id)){
        this.toastr.warning("Item já foi adicionado ao carrinho");
      } else {
        this.toastr.success("Item adicionado ao carrinho");
        carrinhoItens.push(produto);
        localStorage.setItem(LocalStorageKeys.cart, JSON.stringify(carrinhoItens));
      }
    } else {
      localStorage.setItem(LocalStorageKeys.cart, JSON.stringify([produto]));
    }
  }

  clienteLogado(): Boolean {
    return this.auth.usuarioCliente();
  }

}
