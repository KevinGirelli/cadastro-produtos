package com.spring.backend.controller;

import com.spring.backend.entity.Produto;
import com.spring.backend.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;

    @RequestMapping("/cadastro")
    public ResponseEntity<Produto> cadastroProduto(@RequestBody Produto produto) {
        Produto novoProduto = produtoService.criarProduto(produto);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoProduto);
    }
    @GetMapping("/listar")
    public ResponseEntity<List<Produto>> listarMensagens() {
        List<Produto> produtos = produtoService.listarProdutos();
        return ResponseEntity.ok().body(produtos);
    }
}
