import { useState, useEffect } from "react";
import axios from "axios";

function AxiosTeste() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8010/coffebrew/produto/lista"
        );
        setProdutos(response.data);
        console.log(response);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.idProduto}>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>Preço: {produto.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default AxiosTeste;
