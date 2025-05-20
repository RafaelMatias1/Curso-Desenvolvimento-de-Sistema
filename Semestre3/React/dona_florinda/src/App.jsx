import React, { useState } from 'react';
import './App.css';

function Padaria() {

  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [busca, setBusca] = useState('');
  const [receitas, setReceitas] = useState([
    {
      nome: "Bolo de Chocolate",
      ingredientes: [
        { nome: "Chocolate em Pó", quantidade: 200, unidade: "g" },
        { nome: "Farinha de Trigo", quantidade: 250, unidade: "g" },
        { nome: "Açúcar", quantidade: 200, unidade: "g" }
      ],
      modoDePreparo: "1. Misture todos os ingredientes secos. 2. Adicione os líquidos. 3. Asse por 40 minutos."
    },
    {
      nome: "Risoto de Funghi",
      ingredientes: [
        { nome: "Arroz Arbóreo", quantidade: 300, unidade: "g" },
        { nome: "Funghi Seco", quantidade: 100, unidade: "g" },
        { nome: "Caldo de Legumes", quantidade: 500, unidade: "ml" }
      ],
      modoDePreparo: "1. Hidrate o funghi. 2. Refogue o arroz com o funghi. 3. Adicione o caldo aos poucos até o arroz ficar al dente."
    },
    {
      nome: "Salada de Frutas",
      ingredientes: [
        { nome: "Banana", quantidade: 2, unidade: "un" },
        { nome: "Maçã", quantidade: 2, unidade: "un" },
        { nome: "Laranja", quantidade: 2, unidade: "un" }
      ],
      modoDePreparo: "1. Corte as frutas em pedaços. 2. Misture tudo em uma tigela. 3. Sirva gelado."
    }
  ]);


}