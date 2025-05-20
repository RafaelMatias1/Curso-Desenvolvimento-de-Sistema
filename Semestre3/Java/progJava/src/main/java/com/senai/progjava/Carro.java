//package com.mycompany.backjava;

package com.senai.progjava;


public class Carro {
private String nome = null;

public Carro(){
// Aqui são os comandos/inicializadores do construtor da classe
this.nome = "bmw";
}

public void setNomeCarro(String nom){
this.nome = nom;
}

public String getNomeCarro(){
return this.nome;
}
}