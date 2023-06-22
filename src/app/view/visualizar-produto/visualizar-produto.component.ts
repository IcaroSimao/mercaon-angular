import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutoRequest } from 'src/app/interface/request/produto-request';
import { ProdutoResponse } from 'src/app/model/response/produto-response';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.css']
})
export class VisualizarProdutoComponent implements OnInit {

  id: string | null = null;

  produto: ProdutoResponse | null = null;

  imagemEscolhida: string | ArrayBuffer | null = null;

  @ViewChild('form') form: NgForm | undefined;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private location: Location, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.estaCriando()) {
      this.produtoService.consultarPorId(this.id as string).subscribe((response) => {
        if (response.data == null) {
          this.router.navigateByUrl('/produto/criar');
        } else {
          this.produto = response.data;
          this.form?.controls['nome'].setValue(this.produto.nome);
          this.form?.controls['descricao'].setValue(this.produto.descricao);
          this.form?.controls['valor'].setValue(this.produto.valor);
          this.imagemEscolhida = this.produto.imagem;
        }
      });
    }
  }

  estaCriando(): Boolean {
    if (this.id == null) {
      return true;
    }
    return false;
  }

  enviar(form: NgForm) {
    const request = form.value as ProdutoRequest
    request.imagem = this.imagemEscolhida as string;

    if (this.estaCriando()) {
      this.produtoService.cadastrar(request).subscribe((response) => {
        this.toastr.success(response.mensagem);
        this.router.navigateByUrl('/produtos');
      });
    } else {
      request.id = this.produto?.id as number

      this.produtoService.alterar(request).subscribe((response) => {
        this.toastr.success(response.mensagem);
      });
    }

  }

  telaAnterior() {
    this.location.back();
  }

  escolherImagem(e: any) {
    if (e.target.files && e.target.files[0]) {
      const arquivo = e.target.files[0] as File;
      const extensao = arquivo.type.split('/')[1];

      if (['jpg', 'jpeg', 'png'].includes(extensao)) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imagemEscolhida = reader.result;
          return reader.result;
        }

        reader.readAsDataURL(arquivo);
      } else {
        this.toastr.warning('Imagem somente aceita arquivos tipo png, jpg ou jpeg!');
      }
    }
  }

}
