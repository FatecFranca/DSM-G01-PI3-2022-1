import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import AreaDados from "../AreaDados/AreaDados";

import Rodape from "../Rodape/Rodape";

import "./Home.css"
import Template from "../Template/Template";

/*interface areaDadosColor {
  backgroundColor: String;
}
*/

export default function Home() {
  return (
    <div className="home">
      <Template/>
      <MenuHorizontal />
      <div className="bodytext">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Bem vindo ao Ergolist</h1>
        <br/>
        <h2> Sistema de avaliação de ergonomia em interface de sistemas </h2>
        <br/>
      </div>
    </div>
  );
}

