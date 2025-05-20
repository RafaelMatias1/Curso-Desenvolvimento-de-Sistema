import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
  import capuccino from "../../assets/capuccino.jpg"
   
  export function CardProduct() {
    return (
      <Card className="max-w-[24rem] overflow-hidden bg-brown-700 hover:bg-brown-300 duration-200">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={capuccino}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="white">
         Capuccino         
          </Typography>
          <Typography variant="lead" color="white" className="mt-3 font-normal">
            cafe com leite gourmet
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content="Cappuccino, do italiano, pronunciado: ou capuchino, geralmente pronunciado: em português, /n é uma bebida italiana preparada com café expresso e leite. Um cappuccino clássico, muito famoso no Brasil, consiste em um terço de café expresso, um terço de leite vaporizado e um terço de espuma de leite ">
              <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src="https://cdn.icon-icons.com/icons2/2249/PNG/512/tooltip_text_outline_icon_139004.png"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
            <Tooltip content="$15">
              <Avatar
                size="sm"
                variant="circular"
                alt="tania andrew"
                src="https://img.myloview.com.br/posters/saco-de-dinheiro-com-cifrao-icone-vector-700-153987067.jpg"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div>
          <Typography className="font-normal" color="white"> Cafes</Typography>
        </CardFooter>
      </Card>
    );
  }