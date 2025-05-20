import { useState } from "react";
import "./color.css";
import "./letter.css";
import MenuLateral from "./menuLateral/menuLateral.jsx";
import Footer from "./footer/footer.jsx";

import NaviBarMenu from "./naviBarMenu/NaviBarMenu.jsx";
import MenuCafe from "./menu/MenuCafe.jsx";

function CoffeeBrewMenu() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div className="paginaMenu">

      <MenuLateral />
      <div>
        <NaviBarMenu />
     
        <div className="menuCentral">
          <MenuCafe/>
          
        </div>
        
        
      </div>
    </div>
    <Footer/>
    </div>
        );
}

export default CoffeeBrewMenu;
