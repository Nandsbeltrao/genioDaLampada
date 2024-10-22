import React from "react";
import { useState } from "react";
import "./AppStyle.scss";
import palacio from "./images/imagemPalacio.png";
import lampadaMagica from "./images/lampadaMagica.png";
import genio from "./images/genio.png";

export default function App(){
  const [lampada, setLampada] = useState(false);
  const trocaLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <h1>"Liberte a magia da programaçao com a lâmpada de Aladim."</h1>
      <img 
      src={
        lampada
        ? lampadaMagica : genio
      } 
      alt= "Lâmpada de Gênio" 
      // onClick={trocaLampada}
      />
      <button onClick={trocaLampada} >Clique e faça seus pedidos!</button>
    </main>
  );
}