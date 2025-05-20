package com.sa.coffebrew.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.io.Serializable;
import java.util.Set;

@Table(name = "clientes")
@Entity()
public class Cliente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long idCliente; // Renomeado de IDCliente para seguir convenção de nomenclatura
    
    @Column(nullable = false)
    private Long celular;
    
    @Column(nullable = false)
    private Long fone;
    
    @Column(nullable = false)
    private String email;
    
    @OneToMany(mappedBy = "cliente", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Mesa> mesa;

    public void setMesa(Set<Mesa> mesa) {
        this.mesa = mesa;
    }

    public Set<Mesa> getMesa() {
        return mesa;
    }
    
    public Long getIDCliente() {
        return idCliente;
    }

    public Long getCelular() {
        return celular;
    }

    public Long getFone() {
        return fone;
    }

    public String getEmail() {
        return email;
    }

    public void setIDCliente(Long IDCliente) {
        this.idCliente = IDCliente;
    }

    public void setCelular(Long celular) {
        this.celular = celular;
    }

    public void setFone(Long fone) {
        this.fone = fone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
