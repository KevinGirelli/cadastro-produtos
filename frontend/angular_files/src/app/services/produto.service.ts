import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  cadastrarProduto(cadastrarProduto: any): Observable<any> {
    const httpOptions = {headers: new HttpHeaders({
      "Content-type": "application/json"
    })}
    return this.httpClient.post("http://localhost:8080/cadastrar", cadastrarProduto, httpOptions);
  }
}