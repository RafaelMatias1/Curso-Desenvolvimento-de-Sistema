import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './recuperacao.css';


function recuperacao () {

  return (  
    <div className='container'>
      <div className='meio'>
        <div className='m_cima'>
            <div className='c_cima'>
                Esqueceu sua senha?
            </div>
            <div className='c_baixo'>
                Digite seu e-mail ou CPF e enviaremos as instruções para você criar uma nova senha.
            </div>
        </div>
        <div className='m_meio'>
            <input className='inputs' placeholder='E-mail ou CPF' />
        </div>
        <div className='m_baixo'>
            <div className='b_cima'>

                <Link to="/registro" className='botao1'> Redefinir senha</Link>
            </div>
            <div className='b_baixo'>Caso não tenha mais acesso ao e-mail fale com o adiministrador ou suporte do sistema</div>
        </div>
      </div>
    </div>
  )
}

export default recuperacao;
