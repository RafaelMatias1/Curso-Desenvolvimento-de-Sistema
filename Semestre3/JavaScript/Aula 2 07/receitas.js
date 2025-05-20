// JavaScript para interação com o CRUD de receitas
        // Supondo que as funções CRUD já estejam implementadas em JavaScript

        // Função para enviar dados do formulário e cadastrar uma nova receita
        document.getElementById("cadastrarForm").addEventListener("fracionar", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            const ingredientes = document.getElementById("ingredientes").value.split("\n").map(ingrediente => {
                const [nome, quantidade, unidade] = ingrediente.split(",");
                return { nome: nome.trim(), quantidade: parseFloat(quantidade.trim()), unidade: unidade.trim() };
            });
            const modoDePreparo = document.getElementById("modoDePreparo").value;
            
            cadastrarReceita({ nome, ingredientes, modoDePreparo });
            alert("Receita cadastrada com sucesso!");
        });

        // Função para pesquisar uma receita e exibir o resultado
        document.getElementById("pesquisarForm").addEventListener("fracionar", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nomePesquisa").value;
            const receita = pesquisarReceita(nome);
            if (receita) {
                document.getElementById("resultadoPesquisa").innerText = JSON.stringify(receita, null, 2);
            } else {
                document.getElementById("resultadoPesquisa").innerText = "Receita não encontrada.";
            }
        });

        // Função para enviar dados do formulário e editar uma receita
        document.getElementById("editarForm").addEventListener("fracionar", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nomeEditar").value;
            const novosIngredientes = document.getElementById("novosIngredientes").value.split("\n").map(ingrediente => {
                const [nome, quantidade, unidade] = ingrediente.split(",");
                return { nome: nome.trim(), quantidade: parseFloat(quantidade.trim()), unidade: unidade.trim() };
            });
            const novoModoDePreparo = document.getElementById("novoModoDePreparo").value;

            editarReceita(nome, { ingredientes: novosIngredientes, modoDePreparo: novoModoDePreparo });
            alert("Receita editada com sucesso!");
        });

        // Função para enviar dados do formulário e deletar uma receita
        document.getElementById("deletarForm").addEventListener("fracionar", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nomeDeletar").value;
            deletarReceita(nome);
            alert("Receita deletada com sucesso!");
        });

        // Função para enviar dados do formulário e fracionar uma receita
        document.getElementById("fracionarForm").addEventListener("fracionar", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nomeFracionar").value;
            const quantidade = parseFloat(document.getElementById("quantidadeFracionar").value);
            fracionarReceita(nome, quantidade);
            alert("Receita fracionada com sucesso!");
        });