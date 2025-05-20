import { Carrosel } from "../../componentes/carrosel"
import { ButtonSizes } from "../../componentes/Buttons"

export const  Inicio = () => {
    return(
        <>
        <div className="flex flex-col gap-4">
      <Carrosel></Carrosel>
    
       <ButtonSizes></ButtonSizes>
       
       </div>
        </>
    )
}