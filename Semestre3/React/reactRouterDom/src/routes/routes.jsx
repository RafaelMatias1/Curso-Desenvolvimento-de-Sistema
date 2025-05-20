import { createBrowserRouter } from 'react-router-dom'
import Cadastro from '../pages/Cadastro'
import Home from '../pages/Home'
import Denuncia from '../pages/Denuncia'
import App from '../App'

const router = createBrowserRouter([
    {
        path: '/',
        element:< App />,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/Cadastro',
                element:<Cadastro/> 
            },
            {
                path:'/Denuncia',
                element:<Denuncia/>
            },
        ]
    },


])

export default router