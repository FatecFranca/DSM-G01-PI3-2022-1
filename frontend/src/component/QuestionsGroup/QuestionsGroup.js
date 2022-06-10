import React from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import { useEffect, useState } from "react";
import { api } from '../../services/api.js'

import "./QuestionsGroup.css"
import { useNavigate } from 'react-router-dom'
import Cabecalho from "../Cabecalho/Cabecalho";

//export default function Questions() {
function QuestionsGroup() {  
  const [questionsGroup, setQuestionsGroup] = useState([])
  let  navigate = useNavigate();

  useEffect(() => {
    api.get('question-group')
      .then(response => setQuestionsGroup(response.data))

  }, []);
  
  function responder(item) {
    localStorage.setItem('questionGroupId', item._id)
    navigate('/question')
    
  }

  return (
    <div className="question">
      <Cabecalho/>
      <MenuHorizontal />

      <div id="areaQuestion">
        <div id="idQuestion">
          <legend>Grupos de Questões</legend>
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
                        <td><button onClick={() => responder(item)}>
                          Responder
                        </button></td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsGroup

