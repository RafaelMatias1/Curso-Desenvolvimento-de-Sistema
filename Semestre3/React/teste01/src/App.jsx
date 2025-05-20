import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
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

  const handleCadastroReceita = (event) => {
    event.preventDefault();
    const listaIngredientes = ingredientes.split('\n');
    const listaIngredientesFormatada = listaIngredientes.map(item => {
      const [nome, quantidade, unidade] = item.split(' ');
      return { nome, quantidade: parseFloat(quantidade), unidade };
    });
    const novaReceita = { nome, ingredientes: listaIngredientesFormatada };
    setReceitas([...receitas, novaReceita]);
    setNome('');
    setIngredientes('');
  };
  

  const handlePesquisa = () => {
    const termoBusca = busca.toLowerCase();
    const resultado = receitas.filter(receita => receita.nome.toLowerCase().includes(termoBusca));
    setReceitas(resultado);
  };

  const handleEditar = (index) => {
    const novoNome = prompt('Digite o novo nome da receita:');
    const novosIngredientes = prompt('Digite os novos ingredientes separados por vírgula:').split(',');
    const novasReceitas = [...receitas];
    novasReceitas[index] = { nome: novoNome, ingredientes: novosIngredientes };
    setReceitas(novasReceitas);
  };

  const handleDeletar = (index) => {
    const novasReceitas = receitas.filter((_, i) => i !== index);
    setReceitas(novasReceitas);
  };

  const handleFracionar = (index) => {
    const fator = prompt('Digite o fator de fracionamento (ex: 0.5 para reduzir pela metade):');
    const receitaOriginal = receitas[index];
    const ingredientesFracionados = receitaOriginal.ingredientes.map(ingrediente => {
      return { 
        nome: ingrediente.nome, 
        quantidade: ingrediente.quantidade * parseFloat(fator), 
        unidade: ingrediente.unidade 
      };
    });
    const receitaFracionada = { 
      nome: receitaOriginal.nome + " (Fracionada)", 
      ingredientes: ingredientesFracionados,
      modoDePreparo: receitaOriginal.modoDePreparo 
    };
    setReceitas([...receitas, receitaFracionada]);
  };

  const renderizarReceitas = () => {
    return receitas.map((receita, index) => (
      <div key={index} className="receita">
        <h2>{receita.nome}</h2>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          {receita.ingredientes.map((ingrediente, i) => (
            <li key={i}>{ingrediente.nome} - {ingrediente.quantidade} {ingrediente.unidade}</li>
          ))}
        </ul>
        <p><strong>Modo de Preparo:</strong></p>
        <p>{receita.modoDePreparo}</p>
        <button onClick={() => handleEditar(index)}>Editar</button>
        <button onClick={() => handleDeletar(index)}>Deletar</button>
        <button onClick={() => handleFracionar(index)}>Fracionar</button>
      </div>
    ));
  };

  return (
    <div className="container">
      <h1>Gerenciador de Receitas</h1>

      <form onSubmit={handleCadastroReceita}>
        <label htmlFor="nome">Nome da Receita:</label>
        <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        
        <label htmlFor="ingredientes">Ingredientes:</label>
        <textarea id="ingredientes" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required />
        
        <button type="submit">Cadastrar Receita</button>
      </form>

      <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Pesquisar receita..." />
      <button onClick={handlePesquisa}>Pesquisar</button>

      {renderizarReceitas()}
    </div>
  );
}

export default App;
