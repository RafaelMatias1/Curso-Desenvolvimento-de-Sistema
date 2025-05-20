import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/CompLogin//login';
import Recuperacao from './components/CompRecuperacao/recuperacao';
import Registro from './components/CompRegistro/registro';
import Inicio from './components/CompInicio/inicio';
import Home from './components/HOME - COLABORADOR/home';
import Gerente from './components/CompGerente/gerente';

import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>} /> 
        <Route path="/Gerente" element={<Gerente/>} />            
        <Route path="/recuperacao" element={<Recuperacao/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/Inicio" element={<Inicio/>} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
