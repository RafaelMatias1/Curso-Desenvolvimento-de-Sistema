package com.sa.coffebrew.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "pedidos")
@Entity()
public class Pedido {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long idPedido;
    
    @Column(nullable = false)
    private Integer quantidade;
    
    @Column(nullable = false)
    private Double precoPedido;
    
    @ManyToOne
    @JsonBackReference
    private Mesa mesa;
    
    @ManyToOne
    private Cliente cliente; 
    
    @ManyToOne
    private Produto produto; 

    public Long getIdPedido() {
        return idPedido;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public Double getPrecoPedido() {
        return precoPedido;
    }

    public Mesa getMesa() {
        return mesa;
    }
    
    public Cliente getCliente() {
        return cliente;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setIdPedido(Long idPedido) {
        this.idPedido = idPedido;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public void setPrecoPedido(Double precoPedido) {
        this.precoPedido = precoPedido;
    }

    public void setMesa(Mesa mesa) {
        this.mesa = mesa;
    }
    
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }
}
