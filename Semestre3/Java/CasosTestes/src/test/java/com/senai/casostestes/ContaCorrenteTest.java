package com.senai.casostestes;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ContaCorrenteTest {
    
    public ContaCorrenteTest() {
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
    public void testSetNome() {
        System.out.println("setNome");
        String nome = "";
        ContaCorrente instance = null;
        instance.setNome(nome);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setSaldo method, of class ContaCorrente.
     */
    @Test
    public void testSetSaldo() {
        System.out.println("setSaldo");
        Double saldo = null;
        ContaCorrente instance = null;
        instance.setSaldo(saldo);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getNome method, of class ContaCorrente.
     */
    @Test
    public void testGetNome() {
        System.out.println("getNome");
        ContaCorrente instance = null;
        String expResult = "";
        String result = instance.getNome();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getSaldo method, of class ContaCorrente.
     */
    @Test
    public void testGetSaldo() {
        System.out.println("getSaldo");
        ContaCorrente instance = null;
        Double expResult = null;
        Double result = instance.getSaldo();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
