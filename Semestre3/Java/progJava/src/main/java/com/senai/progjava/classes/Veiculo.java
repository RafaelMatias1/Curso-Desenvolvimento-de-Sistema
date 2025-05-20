package com.senai.progjava.classes;

public class Veiculo {
    
    private String tipo;
    private String cor;
    private String placa;
    private String cambio;
    protected String combustivel;
    private String modelo;
    private int anofabrica;
    private Long renavan;
    
    public String getTipo(){
        return tipo;
    }
    public void setTipo(String tipo){        
        this.tipo = tipo;
    }
    public String getCor() {
        return cor;
    }
    public void setCor(String cor) {
        this.cor = cor;
    }
    public String getPlaca() {
        return placa;
    }
    public void setPlaca(String placa) {
        this.placa = placa;
    }
    public String getCambio() {
        return cambio;
    }
    public void setCambio(String cambio) {
        this.cambio = cambio;
    }
    public String getCombustivel() {
        return combustivel;
    }
    public void setCombustivel(String combustivel) {
        this.combustivel = combustivel;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public int getAnofabrica() {
        return anofabrica;
    }
    public void setAnofabrica(int anofabrica) {
        this.anofabrica = anofabrica;
    }
    public Long getRenavan() {
        return renavan;
    }
    public void setRenavan(Long renavan) {
        this.renavan = renavan;
    }
    
}
