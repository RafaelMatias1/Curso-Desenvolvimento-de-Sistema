package com.senai.casostestes;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CasosTestesTest {
    
    public CasosTestesTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
    }
        
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
    }

    @Test
    public void testcalcMedia() {
        System.out.println("teste metodo certo");
        CasosTestes cs = new CasosTestes();
        assertEquals(cs.calcMedia(10),2.75);
    }
    @Test
    public void testCalcMedia2(){
        
        System.out.println("teste metodo errado");
        CasosTestes cs = new CasosTestes();
        assertEquals(cs.calcMedia(10),2.70);
        
    }
}