package com.senai.casostestes;

public class CasosTestes {

        private Double nota = 0.0;
        private Double media = 0.0;  
    
    public static void main(String[] args) {

        CasosTestes cs = new CasosTestes();
        
        System.out.println("Media..: "+ cs.calcMedia(10));

    }
    public Double calcMedia(int qtdNota){
        
        for(int i=1;i<=qtdNota;i++){
            
            nota = nota + i*(0.5);
            
        }
        media = nota /10;
        return media;
        
    }
}
