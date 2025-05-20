package com.senai.classesjava;

import com.senai.classesjava.Heranca.PessoaFisica;
import com.senai.classesjava.Heranca.PessoaJuridica;

public class ClassesJava {
        
    public static void main(String[] args) {
        System.out.println("Hello World!");
        ClassesJava cl = new ClassesJava();
        cl.criaPessoafisica();
        cl.criaPessoaJuridica();
    }
    
    public void criaPessoafisica(){
        
        PessoaFisica pf = new PessoaFisica();
        pf.setNome("Carlos Silva");
        pf.setCelular("4891111111");
        pf.setCpf("111111111-11");
        pf.setFiliacao("homer Simpson");
        pf.setEmail("@gmail.com");
        pf.setGenero("masculino");
        pf.setFone("4891111111");
        //pf.setNascimento("10/03/2024");
        
        System.out.println("Nome do Cliente; "+ pf.getNome());
        System.out.println("CPF do cliente: "+ pf.getCpf()); 
        System.out.println("enail do cliente" + pf.getEmail());
        System.out.println("\n\n\n");
        
    }
    
    public void criaPessoaJuridica(){
        
        PessoaJuridica pj = new PessoaJuridica();
                
       pj.setCNPJ("00333333333333");
       pj.setFone("489111111111");
       pj.setEmail("emp@gmail.com");
       pj.setNomefantasia("Veiculo Brasil");
       pj.setRazaosocial("Veiculo Brasil Ltda");
       pj.setRepresentante("Joe Biden");
       
       System.out.println("Nome fantasia do cliente PJ: " + pj.getNomefantasia());
       System.out.println("CNPJ do cliente PJ: " + pj.getCNPJ());
       System.out.println("Fone do cliente PJ: " + pj.getFone());
       System.out.println("Representante do cliente PJ: " + pj.getRepresentante());
        
    }
}
