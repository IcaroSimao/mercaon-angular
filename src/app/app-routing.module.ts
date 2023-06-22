import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstoqueProdutoComponent } from './estoque-produto/estoque-produto.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { LoginPadraoComponent } from './login-padrao/login-padrao.component';
import { ProdutoComponent } from './produto/produto.component';
import { AutenticadoGuard } from './guard/autenticado.guard';
import { NaoAutenticadoGuard } from './guard/nao-autenticado.guard';
import { AdminGuard } from './guard/admin.guard';
import { RealizarVendaComponent } from './view/realizar-venda/realizar-venda.component';
import { VisualizarEstoqueComponent } from './view/visualizar-estoque/visualizar-estoque.component';
import { VisualizarProdutoComponent } from './view/visualizar-produto/visualizar-produto.component';
import { CriarAdminComponent } from './view/criar-admin/criar-admin.component';
import { ClienteComponent } from './view/cliente/cliente.component';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { VisualizarClienteComponent } from './view/visualizar-cliente/visualizar-cliente.component';
import { VisualizarUsuarioComponent } from './view/visualizar-usuario/visualizar-usuario.component';
import { VendaComponent } from './view/venda/venda.component';
import { VisualizarVendaComponent } from './view/visualizar-venda/visualizar-venda.component';

export const routes: Routes = [
  { path: 'login', component: LoginPadraoComponent, canActivate: [NaoAutenticadoGuard] },

  { path: 'cadastro', component: CadastroComponent, canActivate: [NaoAutenticadoGuard] },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AutenticadoGuard] },

  { path: 'estoque', component: EstoqueComponent, canActivate: [AdminGuard] },

  { path: 'estoque/criar', component: VisualizarEstoqueComponent, canActivate: [AdminGuard] },

  { path: 'estoque/editar/:id', component: VisualizarEstoqueComponent, canActivate: [AdminGuard] },

  { path: 'estoqueProduto', component: EstoqueProdutoComponent, canActivate: [AutenticadoGuard] },

  { path: 'produto', component: ProdutoComponent, canActivate: [AutenticadoGuard] },
  
  { path: 'produto/criar', component: VisualizarProdutoComponent, canActivate: [AdminGuard] },
  
  { path: 'produto/editar/:id', component: VisualizarProdutoComponent, canActivate: [AdminGuard] },

  { path: 'carrinho', component: RealizarVendaComponent, canActivate: [AutenticadoGuard] },
  
  { path: 'admin', component: DashboardAdminComponent, canActivate: [AdminGuard] },

  { path: 'cliente', component: ClienteComponent, canActivate: [AdminGuard] },

  { path: 'cliente/editar/:cpf', component: VisualizarClienteComponent, canActivate: [AdminGuard] },

  { path: 'usuario', component: UsuarioComponent, canActivate: [AdminGuard] },

  { path: 'venda', component: VendaComponent, canActivate: [AdminGuard] },

  { path: 'venda/:id', component: VisualizarVendaComponent, canActivate: [AdminGuard] },

  { path: 'usuario/editar/:id', component: VisualizarUsuarioComponent, canActivate: [AdminGuard] },

  { path: 'admin/criar', component: CriarAdminComponent, canActivate: [AdminGuard] },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
