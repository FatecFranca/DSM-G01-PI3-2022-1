import React from "react";
import "./Template.css"
import imgagemEscolhida from './logo5.png'

function Template() {
  return (<div class="borda">
            <img src={imgagemEscolhida} height={150} width={150}/>
          </div>
  );
}

export default Template;
