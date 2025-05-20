package com.sa.coffebrew.services;

import com.sa.coffebrew.entities.Mesa;
import com.sa.coffebrew.repository.MesaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MesaService {
    
    @Autowired
    private MesaRepository mesaRepository;
    
    public Long incluirMesa(Mesa mesa){
        return mesaRepository.save(mesa).getIDMesas();
    }
    
    public Boolean excluirMesa(Long idMesa){
        try {
            mesaRepository.deleteById(idMesa);
            return true;
        } catch(Exception ex) {
            System.out.println("Erro ao excluir mesa ID: " + idMesa + " Erro: " + ex.getLocalizedMessage());
            return false;
        }
    }
    
    public Optional<Mesa> consultarMesa(Long idMesa){
        return mesaRepository.findById(idMesa);
    }
    
    public List<Mesa> listarMesas(){
        return mesaRepository.findAll();
    }
    
    public Boolean atualizarMesa(Mesa mesa) {
        Optional<Mesa> optionalMesa = mesaRepository.findById(mesa.getIDMesas());
        if (optionalMesa.isPresent()) {
            Mesa m = optionalMesa.get();
            m.setNumero(mesa.getNumero());
            m.setPrecoTotal(mesa.getPrecoTotal());
            m.setStatus(mesa.getStatus());
            m.setCliente(mesa.getCliente());
            mesaRepository.save(m);
            return true;
        } else {
            return false;
        }
    }
}
