package com.senai.classesjava.Heranca;

import java.util.Date;

public class PessoaFisica extends Cliente{
    
    private String nome;
    private String cpf;
    private Date nascimento;
    private String genero;
    private String filiacao;

    public PessoaFisica(){
        
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setNascimento(Date nascimento) {
        this.nascimento = nascimento;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public void setFiliacao(String filiacao) {
        this.filiacao = filiacao;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public Date getNascimento() {
        return nascimento;
    }

    public String getGenero() {
        return genero;
    }

    public String getFiliacao() {
        return filiacao;
    }
    
    
    
}
