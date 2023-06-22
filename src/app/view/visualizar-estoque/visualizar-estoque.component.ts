import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstoqueRequest } from 'src/app/interface/request/estoque-request';
import { EstoqueResponse } from 'src/app/model/response/estoque-response';
import { ProdutoResponse } from 'src/app/model/response/produto-response';
import { EstoqueService } from 'src/app/service/estoque.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-visualizar-estoque',
  templateUrl: './visualizar-estoque.component.html',
  styleUrls: ['./visualizar-estoque.component.css']
})
export class VisualizarEstoqueComponent implements OnInit {

  id: string | null = null;
  produtoSelecionado: any = null;

  produtos: ProdutoResponse[] | null = null;
  estoque: EstoqueResponse | null = null;

  @ViewChild('form') form: NgForm | undefined; 

  constructor(private route: ActivatedRoute, private estoqueService: EstoqueService, private toastr: ToastrService, private router: Router, private location: Location, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.consultarProdutos();
    if(!this.estaCriando()) {
      this.estoqueService.consultarPorId(this.id as string).subscribe((response) => {
        if(response.data == null) {
          this.router.navigateByUrl('/estoque/criar');
        } else {
          this.estoque = response.data;
          this.produtoSelecionado = this.estoque.produto;
          this.form?.controls['nome'].setValue(this.estoque.nome);
          this.form?.controls['descricao'].setValue(this.estoque.descricao);
          this.form?.controls['quantidade'].setValue(this.estoque.quantidade);
        }
      }, _ => {
        this.router.navigateByUrl('/estoque');
      });
    }
  }

  consultarProdutos() {
    this.produtoService.consultar().subscribe((response) => {
      this.produtos = response.data
    });
  }

  estaCriando(): Boolean {
    if (this.id == null) {
      return true;
    }
    return false;
  }

  enviar(form: NgForm) {
    let request = form.value as EstoqueRequest;
    request.produtoId = this.produtoSelecionado.id;
    
    if(this.estaCriando()) {
      this.estoqueService.cadastrar(request).subscribe((response) => {
        this.toastr.success(response.mensagem);
        this.router.navigateByUrl('/estoque');
      });
    } else {
      this.estoqueService.alterar(request).subscribe((response) => {
        this.toastr.success(response.mensagem);
      });
    }
  }

  telaAnterior() {
    this.location.back();
  }

}
