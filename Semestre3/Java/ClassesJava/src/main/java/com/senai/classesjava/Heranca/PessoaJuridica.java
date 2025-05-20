package com.senai.classesjava.Heranca;

public class PessoaJuridica extends Cliente{
    
    private String CNPJ;
    private String nomefantasia;
    private String razaosocial;
    private String representante;

    public PessoaJuridica(){
             
    }
    
    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    public void setNomefantasia(String nomefantasia) {
        this.nomefantasia = nomefantasia;
    }

    public void setRazaosocial(String razaosocial) {
        this.razaosocial = razaosocial;
    }

    public void setRepresentante(String representante) {
        this.representante = representante;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public String getNomefantasia() {
        return nomefantasia;
    }

    public String getRazaosocial() {
        return razaosocial;
    }

    public String getRepresentante() {
        return representante;
    }
    
    
    
}
