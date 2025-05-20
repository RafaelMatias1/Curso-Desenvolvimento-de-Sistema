import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    return(

        <nav>
            <Link to="/">Home</Link>
            <Link to="/Cadastro">Cadastro</Link>
            <Link to="/Denuncia">Denuncia</Link>
        </nav>

    )
}
export default Navbar