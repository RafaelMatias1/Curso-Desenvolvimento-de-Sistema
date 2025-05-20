/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sa.coffebrew.controllers;

import com.sa.coffebrew.entities.Produto;
import com.sa.coffebrew.services.ProdutoService;
import com.sa.coffebrew.entities.MsgRetorno;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;
/**
 *
 * @author alessandro_bento
 */
@RestController
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;
    
    @CrossOrigin(origins = "*")
    @GetMapping("/produto/{id}")
    public ResponseEntity<Object> consultaProduto(@PathVariable(value = "id") Long idProduto){
        Optional<Produto> produto = produtoService.consultarProduto(idProduto);
        if(produto.isPresent()){
            return new ResponseEntity<>(produto.get(), HttpStatus.OK);
        } else {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Consultar Produto");
            erro.setDescricao("Erro ao consultar Produto ID: " + idProduto );
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);            
        }
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping(value = "/produto", consumes = {"application/json"})
    public ResponseEntity<Object> incluirProduto(@Valid @RequestBody Produto produto){
        Long idProduto = produtoService.incluirProduto(produto);
        if(idProduto != null && idProduto > 0){
            return new ResponseEntity<>(idProduto, HttpStatus.OK);
        } else {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Incluir Produto");
            erro.setDescricao("Erro ao incluir Produto! Chame a TI!!");
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);            
        }
    }
    
    @CrossOrigin(origins = "*")
    @GetMapping(value = "/produto/lista")
    public ResponseEntity<Object> listarProdutos() {
        return new ResponseEntity<>(produtoService.listarProdutos(), HttpStatus.OK);
    }
}
