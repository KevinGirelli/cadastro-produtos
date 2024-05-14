package com.spring.backend.service;

import com.spring.backend.entity.Produto;
import com.spring.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto criarProduto(Produto produto) {
        produto.setDataCriacao(LocalDateTime.now());
        return produtoRepository.save(produto);
    }
}
