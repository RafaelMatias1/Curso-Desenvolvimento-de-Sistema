package com.sa.coffebrew.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "mesas")
@Entity()
public class Mesa {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long idMesa; // Renomeado de IDMesas para seguir convenção de nomenclatura
    
    @Column(nullable = false)
    private int numero;
    
    @Column(nullable = false)
    private Double precoTotal;
    
    @Column(nullable = false)
    private String status;
    
    @ManyToOne
    @JsonBackReference
    private Cliente cliente;
    
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public Long getIDMesas() {
        return idMesa;
    }

    public int getNumero() {
        return numero;
    }

    public Double getPrecoTotal() {
        return precoTotal;
    }

    public String getStatus() {
        return status;
    }

    public void setIDMesas(Long IDMesa) {
        this.idMesa = IDMesa;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public void setPrecoTotal(Double precoTotal) {
        this.precoTotal = precoTotal;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    
}
