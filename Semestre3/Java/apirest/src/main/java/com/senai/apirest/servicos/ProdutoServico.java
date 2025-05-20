/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.senai.apirest.servicos;

import com.senai.apirest.entidades.Produto;
import com.senai.apirest.repositorios.ProdutoRepositorio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Rafel_Matias
 */

@Service
public class ProdutoServico {
    @Autowired
    private ProdutoRepositorio produtoRepositorio;
    
    public Long incluirProduto(Produto produto){   
        return produtoRepositorio.save(produto).getIDProduto();
    }
    
    public Boolean excluirProduto(Long idProduto){
        
        try{
            
            produtoRepositorio.deleteById(idProduto);
            return true;
            
        }catch(Exception ex){
            System.out.println("Erro ao excluir"
                             + " ID do produto: " + idProduto
                             + " Erro: " + ex.getLocalizedMessage());
            return false;
        }
    
    }
    
    
    public Optional<Produto> consultarProduto(Long idProduto){
        
        return produtoRepositorio.findById(idProduto);
        
    }
    
    public List<Produto> listarProduto(){
    
        return produtoRepositorio.findAll();

    }
    
public Boolean atualizarProduto(Produto produto) {
    
    Produto prd = produtoRepositorio.getById(produto.getIDProduto());

    
    if (prd != null) {
        
        prd.setNomeProduto(produto.getNomeProduto());
        prd.setValorProduto(produto.getValorProduto());
        prd.setDescricaoProduto(produto.getDescricaoProduto());
        
        
        produtoRepositorio.save(prd);
        
        return true; 
    } else {
        
        return false; 
    }
}
    
    
    
}
