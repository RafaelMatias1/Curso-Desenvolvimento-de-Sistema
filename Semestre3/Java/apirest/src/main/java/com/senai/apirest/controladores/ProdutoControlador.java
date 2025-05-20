/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.senai.apirest.controladores;


import com.senai.apirest.entidades.MsgRetorno;
import com.senai.apirest.entidades.Produto;
import com.senai.apirest.servicos.ProdutoServico;
import jakarta.validation.Valid;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Rafel_Matias
 */
@RestController
public class ProdutoControlador {
    
    @Autowired
    ProdutoServico produtoservico;
    
    //GET  http://localhost:8010/apirest/produto/1
    
    @CrossOrigin(origins = "*")
    @GetMapping("/produto/{id}")
    public ResponseEntity<Object> consultaProduto(@PathVariable(value = "id") Long idProduto)
    {
        
        Optional<Produto> produto = produtoservico.consultarProduto(idProduto);
        if(produto.isPresent())
        {
            return new ResponseEntity<>(produto.get(), HttpStatus.OK);
        } else 
        {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Consultar Produto");
            erro.setDescrição("Erro ao consultar Produto ID: " + idProduto );
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);            
        }
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping(value = "/produto", consumes = {"application/json"})
    public ResponseEntity<Object> incluirProduto(@Valid @RequestBody Produto produto)
    {
        
        Long idProd = produtoservico.incluirProduto(produto);
        
        if(idProd != null && idProd > 0)
        {
            return new ResponseEntity<>(idProd, HttpStatus.OK);
        } else 
        {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Incluir Produto");
            erro.setDescrição("Erro ao incluir Produto! Chame a TI!!");
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);            
        }
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping(value = "/novo-produto", consumes = {"application/json"})
    public ResponseEntity<Long> novoProduto(@Valid @RequestBody Produto produto)
    {
        Long idNovo = produtoservico.incluirProduto(produto);
        return new ResponseEntity<>(idNovo, HttpStatus.OK);
    }
    
    
    @CrossOrigin(origins = "*")
    @PutMapping("/produto")
    public ResponseEntity<Object> atualizarProduto( @Valid @RequestBody Produto atualizaPrd)
    {
    
        MsgRetorno msg = new MsgRetorno();
        msg.setFuncao("Atualizar Produto");
        if(produtoservico.atualizarProduto(atualizaPrd))
        {
            msg.setDescrição("Produto IdProduto("+ atualizaPrd.getIDProduto()+ ") atualizado com sucesso!");
            return new ResponseEntity<>(msg, HttpStatus.OK);
        }
            msg.setDescrição("Produto IdProduto("+ atualizaPrd.getIDProduto()+ ") Erro ao atualizar produto.");
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
    }
    
    
    @CrossOrigin(origins = "*")
    @DeleteMapping("/produto/{id}")
    public ResponseEntity<Object> deletarProduto(@PathVariable(value = "id") long id){
    
        MsgRetorno msg = new MsgRetorno();
        msg.setFuncao("Excluir Produto");
        if ( produtoservico.excluirProduto(id) ){
            msg.setDescrição("Produto idProduto ("+ id + ") excluído com sucesso!");
            return new ResponseEntity<>(msg, HttpStatus.OK);
        } else {
            msg.setFuncao("Excluir produto");
            msg.setDescrição("Erro ao excluir produto idProduto ("+id+"), não cadastrado/inexistente!");
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
        }
        
    }
    
    
}

