import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendaResponse } from 'src/app/model/response/venda-response';
import { VendaService } from 'src/app/service/venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  vendas: VendaResponse[] | null = null;

  constructor(private router: Router, private vendaService: VendaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.consultarVendas();
  }

  consultarVendas() {
    this.vendaService.consultar().subscribe((response) => {
      this.vendas = response.data;
    });
  }

  deletarVenda(venda: VendaResponse) {
    this.vendaService.deletar(venda.id.toString()).subscribe((response) => {
      this.toastr.success(response.mensagem);
      this.consultarVendas()
    })
  }

}
