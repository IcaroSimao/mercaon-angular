import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstoqueProdutoComponent } from './estoque-produto/estoque-produto.component';
import { EstoqueComponent } from './estoque/estoque.component';
// import { AutenticadoGuard } from './guard/autenticado.guard';
// import { NaoAutenticadoGuard } from './guard/nao-autenticado.guard';
import { LoginPadraoComponent } from './login-padrao/login-padrao.component';
import { ProdutoComponent } from './produto/produto.component';

export const routes: Routes = [
  { path: 'login', component: LoginPadraoComponent },
  // canActivate: [NaoAutenticadoGuard] 
  { path: 'cadastro', component: CadastroComponent },
  
  { path: 'dashboard', component: DashboardComponent },

  { path: 'dashboardAdmin', component: DashboardAdminComponent},
  // , canActivate: [AutenticadoGuard]
  { path: 'estoque', component: EstoqueComponent },
  
  { path: 'estoqueProduto', component: EstoqueProdutoComponent },

  { path: 'produto', component: ProdutoComponent },
  
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
