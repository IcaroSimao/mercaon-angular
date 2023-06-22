import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendaProdutoResponse } from 'src/app/model/response/venda-produto-response';
import { VendaService } from 'src/app/service/venda.service';

@Component({
  selector: 'app-visualizar-venda',
  templateUrl: './visualizar-venda.component.html',
  styleUrls: ['./visualizar-venda.component.css']
})
export class VisualizarVendaComponent implements OnInit {
  id: string | null = null;

  vendaProduto: VendaProdutoResponse | null = null;

  constructor(private route: ActivatedRoute, private vendaService: VendaService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id == null){
      this.location.back();
    } else {
      this.consultarVenda();
    }
  }

  consultarVenda() {
    this.vendaService.consultarPorId(this.id!).subscribe((response)=>{
      this.vendaProduto = response.data;
      if(this.vendaProduto.venda == null) {
        this.location.back();
      }
    });
  }

}
