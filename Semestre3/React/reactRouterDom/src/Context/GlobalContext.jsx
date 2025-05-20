import { createContext,useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ( ({children})=>{

    const [usuario, setUsuario] = useState([])

    return(
    <UsuariosContext.Provider value={{usuario}}>
        {children}
    </UsuariosContext.Provider>
    )

})