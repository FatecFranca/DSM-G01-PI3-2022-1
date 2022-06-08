import React from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Template from "../Template/Template.js"
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { api } from '../../services/api.js'

import "./QuestionsGroup.css"

//export default function Questions() {
function QuestionsGroup() {  
  const [questionsGroup, setQuestionsGroup] = useState([])

  useEffect(() => {
    api.get('question-group')
      .then(response => setQuestionsGroup(response.data))

  }, []);
 

  return (
    <div className="question">
      <Template/>
      <MenuHorizontal />

      <div id="areaQuestion">
        <div id="idQuestion">
          <legend>Grupos de Questions</legend>
          <div className="tabela">
            <table className="table table-responsive">
              <thead>
                <tr id="titulo">
                  <th id="t_numero">Grupo</th>
                  <th id="t_enunciado">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {questionsGroup.map((item, i) => {
                  return (
                    <>
                      <tr id={item}>
                        <td id={item.group}>{item.group}</td>
                        <td id={item.description}>{item.description}</td>
                        <Button className="button" href="/question">Questões</Button> 
                      </tr>
                    </>
                  )
                })}
              </tbody>
              <tfoot>
                <tr id="registros">
                  <td>Total de Registros: {questionsGroup.length}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsGroup

