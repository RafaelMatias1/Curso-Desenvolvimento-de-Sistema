/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.senai.apirest.servicos;

import com.senai.apirest.entidades.VendasProduto;
import com.senai.apirest.repositorios.VendasProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author Rafel_Matias
 */
@Service
public class VendasProdutoServico {
    
    @Autowired
    VendasProdutoRepositorio vendasprodutorepositorio;
    
    
    public Long incluirVendaProduto(VendasProduto vendaproduto) {
        return vendasprodutorepositorio.save(vendaproduto).getIDVendasProduto();
    }
    
    public Boolean excluirVendaProduto(Long idVendasProduto) {
        try {
            vendasprodutorepositorio.deleteById(idVendasProduto);
            return true;
        } catch (Exception ex) {
            System.out.println("Erro ao excluir vendaProduto com ID: " + idVendasProduto + ". Erro: " + ex.getLocalizedMessage());
            return false;
        }
    }
    
    public Optional<VendasProduto> consultarVendaProduto(Long idVendasProduto) {
        return vendasprodutorepositorio.findById(idVendasProduto);
    }
    
    public List<VendasProduto> listarVendasProduto(){
        return vendasprodutorepositorio.findAll();
    }
    
    
    public Boolean atualizarVenda(VendasProduto vendaProduto) {
        VendasProduto vndprd = vendasprodutorepositorio.getReferenceById(vendaProduto.getIDVendasProduto());

        if (vndprd != null) {
            
            vndprd.setVendas(vendaProduto.getVendas());
            vndprd.setProduto(vendaProduto.getProduto());
            vndprd.setValorProduto(vendaProduto.getValorProduto());
            vndprd.setQtdProduto(vendaProduto.getQtdProduto());
            

            vendasprodutorepositorio.save(vndprd);
            return true;
        } else {
            return false;
        }
    }
}


