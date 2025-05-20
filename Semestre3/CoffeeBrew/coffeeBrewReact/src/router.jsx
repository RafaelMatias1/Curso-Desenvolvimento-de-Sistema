import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import CoffeeBrewMenu from "./componentes/coffeeBrewMenu";
import MenuCafe from "./componentes/menu/MenuCafe";
import MenuSuco from "./componentes/menu/MenuSuco";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MenuCafe/>} />
        
      </Routes>
      <Routes>
        <Route exact path="/suco" element={<MenuSuco/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
