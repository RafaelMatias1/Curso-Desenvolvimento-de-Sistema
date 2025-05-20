import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './registro.css';


function registro () {

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
            <input className='inputs' placeholder='CODIGO DE RECUPERAÇÃO' />
            <input className='inputs' placeholder='NOVA SENHA' />
            <input className='inputs' placeholder='REPETIR NOVA SENHA' />
        </div>
        <div className='m_baixo'>
          <Link className='botao03' to="/">Registrar Nova Senha</Link>
        </div>
      </div>
    </div>
  )
}

export default registro;
