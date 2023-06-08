import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  constructor(private route: Router) { }

  public sidebarShow: boolean = false;

  ngOnInit(): void {
  }

  irPara(rota: string) {
    this.route.navigate([rota]);
  }

}
