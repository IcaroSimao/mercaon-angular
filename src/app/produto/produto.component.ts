import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private route: Router) { }

  public sidebarShow: boolean = false;
  
  ngOnInit(): void {
  }

  irPara(rota: string) {
    this.route.navigate([rota]);
  }
}
