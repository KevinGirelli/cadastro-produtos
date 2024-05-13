import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {

  nome!: String;
  categoria!: String;
  mercado!: String;
  cadastroProduto: any;

  constructor(cadastroProduto: ProdutoService) {}

  cadastrarProduto() {
    const dados = {
      nome: this.nome,
      categoria: this.categoria,
      mercado: this.mercado
    };

    this.cadastroProduto.cadastrarProduto(dados).subscribe(
      (res: any) => {
        console.log('Produto cadastrado com sucesso: ', res);
        this.nome = '';
        this.categoria = '';
        this.mercado = '';
      },
      (err: any) => {
        console.error('Erro ao cadastrar produto: ', err)
      }
    )
  }

}
