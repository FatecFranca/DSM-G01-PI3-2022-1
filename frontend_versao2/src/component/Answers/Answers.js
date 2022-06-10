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
    let url = `answer/assessment/${localStorage.getItem('assessment')}`
    console.log(url)
    api.get(url)
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
                  <th id="t_enunciado">Enunciado</th>
                  <th id="t_resposta">Resposta</th>
                  <th id="t_comentario">Comentário</th>
                </tr>
              </thead>
              <tbody>
                {answer.map((item, i) => {
                  debugger
                  let resposta 
                  if (item.objective_answer === 'Y'){
                    resposta = 'SIM'
                  }else if (item.objective_answer === 'N'){
                    resposta = 'NÃO'
                  }else if (item.objective_answer === 'X'){
                    resposta = 'N/A'
                  }else{
                    resposta = 'ADIAR'
                  }

                  return (
                    <> 
                      <tr id={item}>
                        <td id={item.question.enunciation}>{item.question.enunciation}</td>
                        <td id={item.question.objective_answer}>{resposta}</td>
                        <td id={item.comments}>{item.comments}</td>                        
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


