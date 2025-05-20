package com.senai.apirest.servicos;

import com.senai.apirest.entidades.Vendas;
import com.senai.apirest.repositorios.VendasRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VendaServico {

    @Autowired
    private VendasRepositorio vendasRepositorio;

    public Long incluirVenda(Vendas venda) {
        return vendasRepositorio.save(venda).getIDVendas();
    }

    public Boolean excluirVenda(Long idVendas) {
        try {
            vendasRepositorio.deleteById(idVendas);
            return true;
        } catch (Exception ex) {
            System.out.println("Erro ao excluir venda com ID: " + idVendas + ". Erro: " + ex.getLocalizedMessage());
            return false;
        }
    }

    public Optional<Vendas> consultarVenda(Long idVendas) {
        return vendasRepositorio.findById(idVendas);
    }

    public List<Vendas> listarVendas() {
        return vendasRepositorio.findAll();
    }

    public Boolean atualizarVenda(Vendas venda) {
        Vendas vnd = vendasRepositorio.getReferenceById(venda.getIDVendas());

        if (vnd != null) {
            
            vnd.setStatus(venda.getStatus());
            vnd.setCliente(venda.getCliente());
            vnd.setVendasProduto(venda.getVendasProduto());

            vendasRepositorio.save(vnd);
            return true;
        } else {
            return false;
        }
    }
}
