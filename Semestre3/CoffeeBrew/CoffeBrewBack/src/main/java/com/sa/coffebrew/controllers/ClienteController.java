package com.sa.coffebrew.controllers;

import com.sa.coffebrew.entities.Cliente;
import com.sa.coffebrew.services.ClienteService;
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

@RestController
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;
    
    @CrossOrigin(origins = "*")
    @GetMapping("/cliente/{id}")
    public ResponseEntity<Object> consultaCliente(@PathVariable(value = "id") Long idCliente){
        Optional<Cliente> cliente = clienteService.consultarCliente(idCliente);
        if(cliente.isPresent()){
            return new ResponseEntity<>(cliente.get(), HttpStatus.OK);
        } else {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Consultar Cliente");
            erro.setDescricao("Erro ao consultar Cliente ID: " + idCliente );
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);            
        }
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping(value = "/cliente", consumes = {"application/json"})
    public ResponseEntity<Object> incluirCliente(@Valid @RequestBody Cliente cliente){
        Long idCliente = clienteService.incluirCliente(cliente);
        if(idCliente != null && idCliente > 0){
            return new ResponseEntity<>(idCliente, HttpStatus.OK);
        } else {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Incluir Cliente");
            erro.setDescricao("Erro ao incluir Cliente! Chame a TI!!");
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);            
        }
    }
}
