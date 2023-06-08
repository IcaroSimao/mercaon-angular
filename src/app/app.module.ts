import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
