import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import CoffeeBrewMenu from "./componentes/coffeeBrewMenu";
import MenuCafe from "./componentes/menu/MenuCafe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CoffeeBrewMenu/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

  