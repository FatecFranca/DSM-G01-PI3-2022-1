import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";

import Rodape from "../Rodape/Rodape";

import "./Answers.css"

export default function Answers() {
  return (
    <div className="answer">
      <Cabecalho />
      <MenuHorizontal />

        <div id="areaAnswer">

        </div>


      <Rodape />
    </div>
  );
}

