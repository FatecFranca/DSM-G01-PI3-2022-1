import React from "react";

import "./Cabecalho.css"
import imgagemEscolhida from '../Template/logo5.png'

function Cabecalho() {
  return (
    <>
      <header className="head">
            <img src={imgagemEscolhida} height={80} width={80}/>
            
    </header>
    </>
  );
}

export default Cabecalho;
