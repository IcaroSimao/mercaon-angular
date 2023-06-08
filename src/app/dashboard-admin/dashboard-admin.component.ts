import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private route: Router) { }

  public sidebarShow: boolean = false;

  ngOnInit(): void {
  }

  irPara(rota: string) {
    this.route.navigate([rota]);
  }

}
