import { Link, Outlet } from 'react-router-dom';
import './gerente.css';


function gerente () {


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
        <div className='baixo'>
            <div className='cima_b'>
                <Link className='botao-gerencia' to="/Inicio">MESA</Link>
                <Link className='botao-gerencia' to="/Inicio">CAIXA</Link>
                <Link className='botao-gerencia' to="/Inicio">COZINHA</Link>
            </div>
            <div className='baixo_b'>
                <Link className='botao-gerencia1' to="/Inicio">ADIMINISTRAÇÃO</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default gerente;