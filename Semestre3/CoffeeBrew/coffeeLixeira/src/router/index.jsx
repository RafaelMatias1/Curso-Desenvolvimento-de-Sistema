import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Nav } from "../componentes/nav";
import { Menu } from "../pages/Menu";
import { Inicio } from "../pages/Inicio";
import { Cadastrocliente } from "../pages/Cadastrocliente";
import { Wrapper } from "../componentes/Wrapper";

  export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <Wrapper>
            
              <Menu></Menu>
              </Wrapper>
          }
        />

        <Route
          path="/Inicio"
          element={
            <Wrapper>
              <Inicio></Inicio>
              </Wrapper>
          }
        />

        <Route
          path="/menu"
          element={
            <Wrapper>
              <Menu></Menu>
              </Wrapper>
          }
        />

        <Route
          path="/cadastrocliente"
          element={
          
            <Wrapper>
            <Cadastrocliente></Cadastrocliente>
            </Wrapper>  
          
          }
        />
      </>
    )
  );
