package com.sa.coffebrew.services;

import com.sa.coffebrew.entities.Cliente;
import com.sa.coffebrew.repository.ClienteRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepository clienteRepository;
    
    public Long incluirCliente(Cliente cliente){
        return clienteRepository.save(cliente).getIDCliente();
    }
    
    public Boolean excluirCliente(Long idCliente){
        try {
            clienteRepository.deleteById(idCliente);
            return true;
        } catch(Exception ex) {
            System.out.println("Erro ao excluir cliente ID: " + idCliente + " Erro: " + ex.getLocalizedMessage());
            return false;
        }
    }
    
    public Optional<Cliente> consultarCliente(Long idCliente){
        return clienteRepository.findById(idCliente);
    }
    
    public List<Cliente> listarClientes(){
        return clienteRepository.findAll();
    }
    
    public Boolean atualizarCliente(Cliente cliente) {
        Optional<Cliente> optionalCli = clienteRepository.findById(cliente.getIDCliente());
        if (optionalCli.isPresent()) {
            Cliente cli = optionalCli.get();
            cli.setCelular(cliente.getCelular());
            cli.setEmail(cliente.getEmail());
            cli.setFone(cliente.getFone());
            clienteRepository.save(cli);
            return true;
        } else {
            return false;
        }
    }
}
