import './menuLateral.css'
import '../color.css'
import '../forme.css'
import '../letter.css'
import { Link } from 'react-router-dom';

export default function MenuLateral() {
    return (
      <div className='menuLateral '>
     <div className=''>
      <img src="./imagensProduto\imagensLogo\logoSemFundo.png"   className='logo' />
      
      {/* <button className='adicionarProdutos'>CAFÉ</button> */}
      <button className='adicionarProduto'><Link to="/">CAFES</Link> </button>
      <button className='adicionarProduto'><Link to="/suco">SUCOS</Link> </button>
      <button className='adicionarProduto'><Link to="/suco">SALGADOS</Link> </button>
      <button className='adicionarProduto'><Link to="/suco">DOCES</Link> </button>
      
   
      </div>
      </div>
    );
   }