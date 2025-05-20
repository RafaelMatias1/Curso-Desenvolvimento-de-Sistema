import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './inicio.css';


function inicio () {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (  
    <div className='container'>
      <div className='esquerda'>
        <button className='botao'>Menu</button>
        <button className='botao'>Combos</button>
        <button className='botao'>Comanda</button>
      </div>
      <div className='direita'>

        <div className="carousel-container">
          <div className="carousel-slide" style={{ display: index === 0 ? 'block' : 'none' }}>
            <img src={'./public/combo.png'} className='imagem_cafe' alt="Combo 1" /> 
          </div>
          <div className="carousel-slide" style={{ display: index === 1 ? 'block' : 'none' }}>
            <img src={'./public/combo02.png'} className='imagem_cafe' alt="Combo 2" /> 
          </div>
          <div className="carousel-slide" style={{ display: index === 2 ? 'block' : 'none' }}>
            <img src={'./public/combo03.png'} className='imagem_cafe' alt="Combo 3" /> 
          </div>
        </div>

      </div>
    </div>
  )
}

export default inicio;