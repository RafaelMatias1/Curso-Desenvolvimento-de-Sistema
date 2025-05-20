import { Nav } from "../nav";
import { Footer } from "../Footer";

export const Wrapper = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Nav />
       <div className=" flex flex-col justify-cemter itens-center py-8 lg:px-32 md:px-12 sm:px-4 ">
        {children}
       </div>
      <Footer></Footer>
    </div>
  );
};
