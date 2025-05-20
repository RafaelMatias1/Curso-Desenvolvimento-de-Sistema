
import { IconButtonDefault } from "../icon";
import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { Div } from "../div";

import './nav.css';
export const Nav = () => {
  return (
    <>
      <nav className="bg-brown-700 rounded-lg ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 flex flex-1 items-center justify-center">

                <img src={logo} alt="Descrição da imagem" className="logo" />
                 
                  <Link   
                  to="/inicio"
                    className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                   Inicio
                   
                  </Link>
                 
                  
                 
                   <Div></Div>
                   
                  
                  <Link
                  to="/cadastrocliente"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Cadastro
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <IconButton size="sm">
        <i className="fas fa-cart" />
      </IconButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
