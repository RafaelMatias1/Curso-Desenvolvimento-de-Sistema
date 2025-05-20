import { Link } from "react-router-dom";

export function ButtonSizes() {
  return (
    <div className=" items-center justify-center gap-4 w-full y-1/2 flex flex-row ">
    
    <Link   
                  to="/inicio"
                    className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                   Já possuo cadastro!
                   
                  </Link>
                  <Link   
                  to="/cadastrocliente"
                    className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                   Inicio
                   
                  </Link>
    </div>
  );
}   