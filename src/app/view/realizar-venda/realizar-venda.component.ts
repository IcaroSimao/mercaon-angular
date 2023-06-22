import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageKeys } from 'src/app/enum/local-storage-keys';
import { ProdutoVendaRequest } from 'src/app/interface/request/produto-venda-request';
import { VendaRequest } from 'src/app/interface/request/venda-request';
import { ProdutoResponse } from 'src/app/model/response/produto-response';
import { AutenticadorService } from 'src/app/service/autenticador.service';
import { VendaService } from 'src/app/service/venda.service';

@Component({
  selector: 'app-realizar-venda',
  templateUrl: './realizar-venda.component.html',
  styleUrls: ['./realizar-venda.component.css']
})
export class RealizarVendaComponent implements OnInit {
  quantidade = 0;
  total = 0.0;

  venda: VendaRequest | null = null;

  produtosAdicionadosAoCarrinho: ProdutoResponse[] | null = null;

  constructor(private vendaService: VendaService, private auth: AutenticadorService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.recuperarCarrinho();
  }

  recuperarCarrinho() {
    let carrinho = localStorage.getItem(LocalStorageKeys.cart);
    if (carrinho) {
      this.gerarProdutoVenda(JSON.parse(carrinho || "") as ProdutoResponse[]);
    }
  }

  gerarProdutoVenda(produtos: ProdutoResponse[]) {
    this.produtosAdicionadosAoCarrinho = produtos;
    this.venda = {produtos: [], token: ""} as VendaRequest;
    produtos.forEach(produto => {
      this.venda?.produtos.push({ produtoId: produto.id, quantidade: 1 } as ProdutoVendaRequest)
    });

    this.atualizarTotal();
  }

  recuperarImagemProduto(produtoId: number): string | undefined {
    return this.produtosAdicionadosAoCarrinho?.find(p => p.id == produtoId)?.imagem;
  }

  recuperarNomeProduto(produtoId: number): string | undefined {
    return this.produtosAdicionadosAoCarrinho?.find(p => p.id == produtoId)?.nome;
  }

  recuperarValorProduto(produtoId: number): number | undefined {
    return this.produtosAdicionadosAoCarrinho?.find(p => p.id == produtoId)?.valor;
  }

  recuperarDescricaoProduto(produtoId: number): string | undefined {
    return this.produtosAdicionadosAoCarrinho?.find(p => p.id == produtoId)?.descricao;
  }

  diminuirQuantidade(indice: number) {
    let obj = this.venda?.produtos[indice];
    
    obj!.quantidade--;
    if (obj!.quantidade == 0) {
      if (confirm("Deseja remover " + this.recuperarNomeProduto(obj!.produtoId) + " do carrinho?") == true) {
        this.removerItem(obj!.produtoId);
      } else {
        this.aumentarQuantidade(indice);
      }
    }
    this.atualizarTotal();
  }

  atualizarTotal() {
    let totalTemp = 0;
    this.venda?.produtos.forEach(item => {
      totalTemp += this.recuperarValorProduto(item.produtoId)! * item.quantidade;
    });
    this.total = totalTemp;
  }

  removerItem(produtoId: number) {
    const indice = this.produtosAdicionadosAoCarrinho?.findIndex(p => p.id == produtoId);
    this.produtosAdicionadosAoCarrinho?.splice(indice!, 1);
    localStorage.setItem(LocalStorageKeys.cart, JSON.stringify(this.produtosAdicionadosAoCarrinho));
    this.recuperarCarrinho()
  }

  aumentarQuantidade(indice: number) {
    let obj = this.venda?.produtos[indice];
    obj!.quantidade++;
    this.atualizarTotal();
  }

  finalizar() {
    if (confirm("Deseja finalizar compra?") == true) {
      this.vendaService.cadastrar(this.venda!).subscribe((response) => {
        this.toastr.success(response.mensagem);
        localStorage.removeItem(LocalStorageKeys.cart);
        this.router.navigateByUrl("/dashboard");
      })
    }
  }

}
