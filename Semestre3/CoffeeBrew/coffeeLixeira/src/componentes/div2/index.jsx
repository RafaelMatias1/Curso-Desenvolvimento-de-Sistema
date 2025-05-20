import "./style.css";
import { CardProduct } from "../Card";
import { cafes } from "../../utils/constants/cafes";
export const Divdois = () => {
  return (
    
    
    <div className="  items-center justify-center gap-4 w-full y-1/2 flex flex-row ">
      {cafes.map((produto) => (
        <div
          clasName="items-center justify-center flex flex-row "
          key={produto.id}
        >
          {/* <div className=" max-h-m bg-brown-700 border border-brown-800 rounded-lg shadow dark:bg-gray-800 dark:border-brown-800  flex flex-col items-center"> */}
          <div className="bg-transparent gap-4 border-brown-800 rounded-lg flex flex-row  items-center justify-center ">
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          
            
           
          </div>
        

        </div>
        
      ))}
    </div>
  );
};
