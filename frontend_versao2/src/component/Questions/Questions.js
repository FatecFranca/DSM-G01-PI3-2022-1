import React from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Template from "../Template/Template.js"
import Dropdown from "react-bootstrap"; 

import { useEffect, useState } from "react";
import { api } from '../../services/api.js'

import "./Questions.css"

//export default function Questions() {
function Questions() {  
  const [question, setQuestion] = useState([])

  useEffect(() => {
    api.get('question')
      .then(response => setQuestion(response.data))

  }, []);
 

  return (
    <div className="question">
      <Template/>
      <MenuHorizontal />

      <div id="areaQuestion">
        <div id="idQuestion">
          <legend>Registros de Questions Cadastrados</legend>
          <div className="tabela">
            <table className="table table-responsive">
              <thead>
                <tr id="titulo">
                  <th id="t_numero">Nº</th>
                  <th id="t_enunciado">Enunciado</th>
                </tr>
              </thead>
              <tbody>
                {question.map((item, i) => {
                  return (
                    <>
                      <tr id={item}>
                        <td id={item.number}>{item.number}</td>
                        <td id={item.enunciation}>{item.enunciation}</td>
                        <td><input type="radio" value="sim" name="resposta" />SIM  </td>
                        <td><input type="radio" value="nao" name="resposta" />NÃO  </td>
                        <td><input type="radio" value="na" name="resposta" />N/A  </td>
                        <td><input type="radio" value="adiar" name="resposta" />ADIAR  </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
              <tfoot>
                <tr id="registros">
                  <td>Total de Registros: {question.length}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions

