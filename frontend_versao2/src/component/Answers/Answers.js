import React from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Template from "../Template/Template.js"

import { useEffect, useState } from "react";
import { api } from '../../services/api.js'

import "./Answers.css"

//export default function Questions() {
function Answer() {  
  const [answer, setAnswer] = useState([])

  useEffect(() => {
    api.get('answer/')
      .then(response => setAnswer(response.data))

  }, []);
 

  return (
    <div className="answer">
      <Template/>
      <MenuHorizontal />

      <div id="areaAnswer">
        <div id="idAnswer">
          <legend>Registros de Respostas Cadastradas</legend>
          <div className="tabela">
            <table className="table table-responsive">
              <thead>
                <tr id="titulo">
                  <th id="t_numero">Nº</th>
                  <th id="t_enunciado">Enunciado</th>
                </tr>
              </thead>
              <tbody>
                {answer.map((item, i) => {
                  return (
                    <>
                      <tr id={item}>
                        <td id={item.number}>{item.number}</td>
                        <td id={item.enunciation}>{item.enunciation}</td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
              <tfoot>
                <tr id="registros">
                  <td>Total de Registros: {answer.length}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer


