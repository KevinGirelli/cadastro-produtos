import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-produtos',
  standalone: true,
  providers: [
    ProdutoService
  ],
  imports: [
    NgFor,
    HttpClientModule
  ],
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.scss'
})
export class ListarProdutosComponent {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe(
      (res: any[]) => {
        this.produtos = res;
      },
      (err) => {
        console.error('Erro ao carregar mensagens:', err);
      }
    );
  }
}