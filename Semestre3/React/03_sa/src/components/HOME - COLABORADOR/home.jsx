import { Link, Outlet } from 'react-router-dom';
import './home.css';


function home () {


  return (  
    <div className='container'>
      <div className='meio'>
        <div className='cima'>
            <div className='c_cima'>
                Bem-Vindo
            </div>
            <div className='c_baixo'>
                ao sistema Agil
            </div>
        </div>
        <div className='baixo_h'>
            <Link className='botao-MESA' to="/Inicio">MESA</Link>
            <Link className='botao-MESA' to="/">CAIXA</Link>
            <Link className='botao-MESA' to="/">COZINHA</Link>
        </div>
      </div>
    </div>
  )
}

export default home;