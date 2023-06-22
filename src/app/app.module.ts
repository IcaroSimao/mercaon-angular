import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginPadraoComponent } from './login-padrao/login-padrao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioAutenticadoComponent } from './usuario-autenticado/usuario-autenticado.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProdutoComponent } from './produto/produto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { EstoqueProdutoComponent } from './estoque-produto/estoque-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericoInterceptor } from './interceptor/generico.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NavbarHeaderComponent } from './util/component/navbar-header/navbar-header.component';
import { RealizarVendaComponent } from './view/realizar-venda/realizar-venda.component';
import { VisualizarEstoqueComponent } from './view/visualizar-estoque/visualizar-estoque.component';
import { VisualizarProdutoComponent } from './view/visualizar-produto/visualizar-produto.component';
import { CriarAdminComponent } from './view/criar-admin/criar-admin.component';
import { ClienteComponent } from './view/cliente/cliente.component';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { VendaComponent } from './view/venda/venda.component';
import { VisualizarClienteComponent } from './view/visualizar-cliente/visualizar-cliente.component';
import { VisualizarUsuarioComponent } from './view/visualizar-usuario/visualizar-usuario.component';
import { VisualizarVendaComponent } from './view/visualizar-venda/visualizar-venda.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPadraoComponent,
    CadastroComponent,
    UsuarioAutenticadoComponent,
    SidebarComponent,
    ProdutoComponent,
    DashboardComponent,
    EstoqueComponent,
    EstoqueProdutoComponent,
    NavbarHeaderComponent,
    RealizarVendaComponent,
    VisualizarEstoqueComponent,
    VisualizarProdutoComponent,
    CriarAdminComponent,
    ClienteComponent,
    UsuarioComponent,
    VendaComponent,
    VisualizarClienteComponent,
    VisualizarUsuarioComponent,
    VisualizarVendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GenericoInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
