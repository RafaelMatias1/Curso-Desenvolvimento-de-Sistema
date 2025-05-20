import { useState } from 'react'
import './App.css'
import { RouterProvider,  } from 'react-router-dom'
import { router } from './router'
import { ThemeProvider } from '@material-tailwind/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ThemeProvider>
         
            <RouterProvider router={router}></RouterProvider>

         
        </ThemeProvider>
        
    </>

  )
}


export default App
