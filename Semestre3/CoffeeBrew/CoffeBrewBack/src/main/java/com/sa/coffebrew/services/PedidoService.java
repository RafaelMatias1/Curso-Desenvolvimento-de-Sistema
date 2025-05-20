package com.sa.coffebrew.services;

import com.sa.coffebrew.entities.Pedido;
import com.sa.coffebrew.repository.PedidoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PedidoService {
    
    @Autowired
    private PedidoRepository pedidoRepository;
    
    public Long incluirPedido(Pedido pedido){
        return pedidoRepository.save(pedido).getIdPedido();
    }
    
    public Boolean excluirPedido(Long idPedido){
        try {
            pedidoRepository.deleteById(idPedido);
            return true;
        } catch(Exception ex) {
            System.out.println("Erro ao excluir pedido ID: " + idPedido + " Erro: " + ex.getLocalizedMessage());
            return false;
        }
    }
    
    public Optional<Pedido> consultarPedido(Long idPedido){
        return pedidoRepository.findById(idPedido);
    }
    
    public List<Pedido> listarPedidos(){
        return pedidoRepository.findAll();
    }
    
    public Boolean atualizarPedido(Pedido pedido) {
        Optional<Pedido> optionalPedido = pedidoRepository.findById(pedido.getIdPedido());
        if (optionalPedido.isPresent()) {
            Pedido p = optionalPedido.get();
            p.setQuantidade(pedido.getQuantidade());
            p.setPrecoPedido(pedido.getPrecoPedido());
            p.setMesa(pedido.getMesa());
            p.setCliente(pedido.getCliente());
            p.setProduto(pedido.getProduto());
            pedidoRepository.save(p);
            return true;
        } else {
            return false;
        }
    }
}
