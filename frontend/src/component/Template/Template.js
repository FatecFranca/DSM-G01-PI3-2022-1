import React from "react";
import "./Template.css"
import imgagemEscolhida from './logo5.png'
import facebook from './facebook.png'
import google from './google.png'
import github from './github.png'



function Template() {
  return (
    <>
      <header className="head">
            <img src={imgagemEscolhida} height={80} width={80}/>
            
    </header>
    <div className="textErgolist">
      <h1 style={{fontSize: '28px'}}>Bem vindo ao Ergolist Questionário de Avaliação de Ergonomia de Interfaces</h1>
      <button className="btnLogin" style={{stroke: 'none'}}>
        Login
      </button>
      <h2>Não tem uma conta? Crie Já!</h2>
      <h3>Ou logue com</h3>
      <div className="redesSociais">
        <button className="facebook">
          <img src={facebook}/>
        </button>
        <button className="google">
          <img src={google}/>
        </button>
        <button className="github">
          <img src={github}/>
        </button>
      </div>
    </div>
    </>
    
  );
}

export default Template;
