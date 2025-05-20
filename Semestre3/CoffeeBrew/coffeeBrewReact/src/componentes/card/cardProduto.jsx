import './cardProduto.css'


export default function CardProduto() {
    return (
      <div className='cardProduto'>
      
          <div className='cardProdutoImagem colorCafe'>
          <img src="./imagensProduto\imagensCafe\produtoCafeAmericano.jpg"  className='logo' />
          </div>

        <div className='cardProdutoTexto'> 

           <h1 className='nomeProduto'>CAFÉ AMERICANO</h1>
           <h5 className='descricaoProduto'>O café americano é uma bebida feita diluindo-se espresso em água quente, resultando em uma xícara suave e menos concentrada do que o espresso puro.</h5>
           <h1 className='valorProduto'>R$30,00</h1>
           <button  className='adicionarProduto'>Comprar</button>

        </div>

      </div>
    );
   }