package com.senai.progjava.classes;

public class CriarVeiculo {
    
    private Veiculo veic;
    private SUV suv;
    
    public CriarVeiculo(){
       veic = new Veiculo(); 
       suv = new SUV();
    }
    public void novoVeiculo(){
        
        veic.setTipo("Sedan");
        veic.setAnofabrica(2008);
        veic.setCambio("manual");
        veic.setCombustivel("Gasolina");
        veic.setCor("Verde");
        veic.setModelo("Civic");
        veic.setPlaca("LXK 3F45");
        veic.setRenavan(123456734545L);
        
        System.out.println("Novo veiculo.. "+ veic.getModelo() + "" +
                veic.getCambio() + "" + veic.getCombustivel());
        
    }
        public void novoSUV(){

            suv.setTipo("Sedan");
            suv.setAnofabrica(2023);
            suv.setCambio("Automatico");
            suv.setCombustivel("Disel");
            suv.setCor("Azul");
            suv.setModelo("RangeRover");
            suv.setPlaca("LXK 3F45");
            suv.setRenavan(123456734545L);
            suv.setTipo("SUV");
            suv.setTracao("4X4");
            
        }
}
