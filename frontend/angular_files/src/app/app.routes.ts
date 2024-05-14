import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "cadastrar",
    component: CadastroProdutoComponent
  },
  {
    path: "listar",
    component: ListarProdutosComponent
  }
];
