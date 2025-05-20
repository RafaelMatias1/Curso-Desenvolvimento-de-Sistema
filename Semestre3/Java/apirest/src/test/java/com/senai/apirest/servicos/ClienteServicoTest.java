/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package com.senai.apirest.servicos;

import com.senai.apirest.entidades.Cliente;
import com.senai.apirest.repositorios.ClienteRepositorio;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 *
 * @author Rafel_Matias
 */
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ClienteServicoTest {
    
    
    @Autowired
    ClienteServico cliSrv = new ClienteServico();
    
    @Autowired
    ClienteRepositorio clienteRepositorio;
    
    public ClienteServicoTest() {
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

    /**
     * Teste de incluir cliente com nome e sem nome.
     */
    @Test
    @Order(1)
    public void testIncluirClienteSemNome() {
        System.out.println("Incluindo Cliente sem nome");

        Cliente cli = new Cliente();
        cli.setCpf("abcd");
        cli.setEmail("a@gmail.com");

    
        Long expResult = cliSrv.incluirCliente(cli);
        Long result = null;
        assertEquals(expResult, result, "A inclusão do cliente deve falhar quando o nome não é fornecido");
    }
    @Test
    @Order(2)
    public void testIncluirClienteComNome() {
        System.out.println("incluir Cliente com nome");
        
        Cliente cli= new Cliente();
        
        cli.setCpf("abcd");
        cli.setEmail("a@gmail.com");
        cli.setNome("A");
        
       // ClienteServico instance = new ClienteServico();
        Long result = null;
        Long expResult = cliSrv.incluirCliente(cli);
        assertNotEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }
    /**
     * Teste de incluir cliente com Cpf e sem Cpf.
     */
    @Test
    @Order(3)
    public void testIncluirClienteSemCpf() {
        System.out.println("incluir Cliente sem cpf");
        
        Cliente cli= new Cliente();
        
        
        cli.setEmail("a@gmail.com");
        cli.setNome("A");
        
       // ClienteServico instance = new ClienteServico();
        Long result = null;
        Long expResult = cliSrv.incluirCliente(cli);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }
    @Test
    @Order(4)
    public void testIncluirClienteComCpf() {
        System.out.println("incluir Cliente com cpf");
        
        Cliente cli= new Cliente();
        
        cli.setCpf("abcd");
        cli.setEmail("a@gmail.com");
        cli.setNome("A");
        
       // ClienteServico instance = new ClienteServico();
        Long result = null;
        Long expResult = cliSrv.incluirCliente(cli);
        assertNotEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }
    /**
     * Teste de Excluir cliente Existente e Inexistente.
     */
    @Test
    @Order(5)
    public void testExcluirClienteExistente() {
        System.out.println("excluir Cliente existente");
        Cliente cliente = new Cliente();
        cliente.setCpf("12345678901");
        cliente.setEmail("cliente@teste.com");
        cliente.setNome("ClienteTeste");

        assertTrue(cliSrv.excluirCliente(1L));
        
        
        
    }
    @Test
    @Order(6)
    public void testExcluirClienteInexistente() {
        System.out.println("excluir Cliente inexistente");
        assertFalse(cliSrv.excluirCliente(-1L));
        
    }
    /**
     * Teste de Consultar cliente Existente e Inexistente.
     */
    @Test
    @Order(7)
    public void testConsultarClienteExistente() {
        System.out.println("consultar Cliente existente");
        Optional<Cliente> cliente = cliSrv.consultarCliente(2L);
        
        Cliente cli = cliente.get();
            
        assertTrue(cli.getCpf().equals("a"));
         
    }
    @Test
    @Order(8)
    public void testConsultarClienteInexistente() {
    System.out.println("consultar Cliente inexistente");
    Optional<Cliente> cliente = cliSrv.consultarCliente(-1L);

    assertFalse(cliente.isPresent());
             
    }
    
    @Test
    @Order(9)
    public void testListarClientes() {
        System.out.println("Listar Cliente");
        long totalClientes = clienteRepositorio.count();
        List<Cliente> clientes = cliSrv.listarClientes();
    
        assertEquals(totalClientes, clientes.size());
    }
    
//
//    /**
//     * Test of consultarCliente method, of class ClienteServico.
//     */
//    @Test
//    public void testConsultarCliente() {
//        System.out.println("consultarCliente");
//        Long idCliente = null;
//        ClienteServico instance = new ClienteServico();
//        Optional<Cliente> expResult = null;
//        Optional<Cliente> result = instance.consultarCliente(idCliente);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of listarClientes method, of class ClienteServico.
//     */
//    @Test
//    public void testListarClientes() {
//        System.out.println("listarClientes");
//        ClienteServico instance = new ClienteServico();
//        List<Cliente> expResult = null;
//        List<Cliente> result = instance.listarClientes();
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of atualizarCliente method, of class ClienteServico.
//     */
//    @Test
//    public void testAtualizarCliente() {
//        System.out.println("atualizarCliente");
//        Cliente cliente = null;
//        ClienteServico instance = new ClienteServico();
//        Boolean expResult = null;
//        Boolean result = instance.atualizarCliente(cliente);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
    
}
