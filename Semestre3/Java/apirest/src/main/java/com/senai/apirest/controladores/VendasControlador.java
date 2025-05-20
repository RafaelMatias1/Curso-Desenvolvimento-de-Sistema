 package com.senai.apirest.controladores;

import com.senai.apirest.entidades.MsgRetorno;
import com.senai.apirest.entidades.Vendas;
import com.senai.apirest.servicos.VendaServico;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
public class VendasControlador {

    @Autowired
    private VendaServico vendasServico;

    @CrossOrigin(origins = "*")
    @GetMapping("/vendas/{id}")
    public ResponseEntity<Object> consultarVenda(@PathVariable(value = "id") Long idVendas) {
        Optional<Vendas> venda = vendasServico.consultarVenda(idVendas);
        if (venda.isPresent()) {
            return new ResponseEntity<>(venda.get(), HttpStatus.OK);
        } else {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Consultar Venda");
            erro.setDescrição("Erro ao consultar venda com ID: " + idVendas);
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/vendas", consumes = {"application/json"})
    public ResponseEntity<Object> incluirVenda(@Valid @RequestBody Vendas venda) {
        Long idVenda = vendasServico.incluirVenda(venda);
        if (idVenda != null && idVenda > 0) {
            return new ResponseEntity<>(idVenda, HttpStatus.OK);
        } else {
            MsgRetorno erro = new MsgRetorno();
            erro.setFuncao("Incluir Venda");
            erro.setDescrição("Erro ao incluir venda! Chame a TI!!");
            return new ResponseEntity<>(erro, HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/vendas")
    public ResponseEntity<Object> atualizarVenda(@Valid @RequestBody Vendas venda) {
        MsgRetorno msg = new MsgRetorno();
        msg.setFuncao("Atualizar Venda");
        if (vendasServico.atualizarVenda(venda)) {
            msg.setDescrição("Venda com ID " + venda.getIDVendas() + " atualizada com sucesso!");
            return new ResponseEntity<>(msg, HttpStatus.OK);
        } else {
            msg.setDescrição("Erro ao atualizar venda com ID " + venda.getIDVendas());
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/vendas/{id}")
    public ResponseEntity<Object> deletarVenda(@PathVariable(value = "id") Long idVendas) {
        MsgRetorno msg = new MsgRetorno();
        msg.setFuncao("Excluir Venda");
        if (vendasServico.excluirVenda(idVendas)) {
            msg.setDescrição("Venda com ID " + idVendas + " excluída com sucesso!");
            return new ResponseEntity<>(msg, HttpStatus.OK);
        } else {
            msg.setDescrição("Erro ao excluir venda com ID " + idVendas);
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/vendas")
    public ResponseEntity<List<Vendas>> listarVendas() {
        List<Vendas> vendas = vendasServico.listarVendas();
        return new ResponseEntity<>(vendas, HttpStatus.OK);
    }
}
