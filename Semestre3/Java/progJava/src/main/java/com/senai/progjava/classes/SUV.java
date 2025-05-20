package com.senai.progjava.classes;


public class SUV extends Veiculo {
    
    private String tracao;
    private int capacidadedecarga;
    
    public void setTracao(String tracao) {
        this.tracao = tracao;
    }

    public void setCapacidadedecarga(int capacidadedecarga) {
        this.capacidadedecarga = capacidadedecarga;
    }

    public String getTracao() {
        return tracao;
    }

    public int getCapacidadedecarga() {
        return capacidadedecarga;
    }
    
    @Override
    public String getCombustivel(){
        return combustivel;
    }
    
}
