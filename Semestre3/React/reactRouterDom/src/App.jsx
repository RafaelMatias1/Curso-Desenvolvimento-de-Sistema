import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import { UsuariosContextProvider } from './Context/GlobalContext'

function App() {

  return (
    <>
      <UsuariosContextProvider>
        
      <Header/>

      <Outlet/>

      <Footer/>

      </UsuariosContextProvider>
    </>
  )
}

export default App
