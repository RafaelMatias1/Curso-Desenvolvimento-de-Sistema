
import { Carousel } from "@material-tailwind/react";
export const Carrosel = () => {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://infato.com.br/wp-content/uploads/2020/05/Sem-t%C3%ADtulo-1-c%C3%B3pia.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
  
      <img
        src="https://infato.com.br/wp-content/uploads/2020/05/Sem-t%C3%ADtulo-1-c%C3%B3pia.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );

};
