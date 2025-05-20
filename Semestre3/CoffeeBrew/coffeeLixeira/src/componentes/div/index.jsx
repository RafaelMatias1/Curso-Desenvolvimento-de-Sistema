import React from "react";
import { Link } from "react-router-dom";
import {  ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
export function Div() {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  return (
    <Menu>
      <MenuHandler>
        <Button> Menu</Button>
      </MenuHandler>
      <MenuList>
                 <Link   
                  to="/menu"
                    className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                   Cafes
                   
                  </Link>
                  <br /><br />
                  <Link   
                  to="/inicio"
                    className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                   Salgados
                   
                  </Link>
                  <br /><br />
        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Doces
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-90" : ""
                }`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Tortas</MenuItem>
            <MenuItem>Bolos</MenuItem>
            <MenuItem>Twix</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>Bebidas</MenuItem>
      </MenuList>
    </Menu>
  );
}