package com.senai.apirest.controladores;

import com.senai.apirest.entidades.Cliente;
import com.senai.apirest.entidades.MsgRetorno;
import com.senai.apirest.servicos.ClienteServico;
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
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class ClienteControlador {
    
    @Autowired
    ClienteServico clienteServico;
    
    @CrossOrigin(origins = "*")
    @GetMapping("/cliente")
    public ResponseEntity<List<Cliente>> listarClientes() {
        List<Cliente> clientes = clienteServico.listarClientes();
        return new ResponseEntity<>(clientes, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/cliente", consumes = {"application/json"})
    public ResponseEntity<Object> incluirCliente(@Valid @RequestBody Cliente cliente){
        Long idCli = clienteServico.incluirCliente(cliente);
        if(idCli != null && idCli > 0){
            return new ResponseEntity<>(idCli, HttpStatus.OK);
        } else {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Incluir Cliente");
            erro.setDescrição("Erro ao incluir Cliente! Chame a TI!!");
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/cliente/{id}")
    public ResponseEntity<Object> consultaCliente(@PathVariable(value = "id") Long idCliente){
        Optional<Cliente> cliente = clienteServico.consultarCliente(idCliente);
        if(cliente.isPresent()){
            return new ResponseEntity<>(cliente.get(), HttpStatus.OK);
        } else {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Consultar Cliente");
            erro.setDescrição("Erro ao consultar Cliente ID: " + idCliente);
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/cliente")
    public ResponseEntity<Object> atualizarCliente(@Valid @RequestBody Cliente cliente){
        MsgRetorno msg = new MsgRetorno();
        msg.setFuncao("Atualizar Cliente");
        if(clienteServico.atualizarCliente(cliente)){
            msg.setDescrição("Cliente ID " + cliente.getIDCliente() + " atualizado com sucesso!");
            return new ResponseEntity<>(msg, HttpStatus.OK);
        } else {
            msg.setDescrição("Erro ao atualizar cliente ID " + cliente.getIDCliente());
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/cliente/{id}")
    public ResponseEntity<Object> deletarCliente(@PathVariable(value = "id") Long id){
        MsgRetorno msg = new MsgRetorno();
        msg.setFuncao("Excluir Cliente");
        if (clienteServico.excluirCliente(id)){
            msg.setDescrição("Cliente ID " + id + " excluído com sucesso!");
            return new ResponseEntity<>(msg, HttpStatus.OK);
        } else {
            msg.setDescrição("Erro ao excluir cliente ID " + id + ", não cadastrado/inexistente!");
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
        }
    }
}
