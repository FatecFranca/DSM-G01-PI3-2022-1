import React from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Template from "../Template/Template.js"

import { useEffect, useState } from "react";
import { api } from '../../services/api.js'

import "./Questions.css"
import { useNavigate } from 'react-router-dom'

function Questions() {  
  const [question, setQuestion] = useState([])
  
  let respostas = []
  let comment =[]
  let  navigate = useNavigate();
 
  useEffect(() => {
    let url = `question/group/${localStorage.getItem('questionGroupId')}`
    api.get(url)
      .then(response => setQuestion(response.data))

  }, []);

  
  async function atualizaComment (index, item){
    comment.splice(index,1)
    comment.splice(index,0,{item})
  };

  async function atualizaAnswer (index, item){
    respostas.splice(index-1,1)
    respostas.splice(index-1,0,{item})
  };
 
  async function Navegacao() {
    let user = localStorage.getItem('userId')
    let title = `assessment`
    let description = `assessment ${user}`
    let assessment
    const returnPost = await api.post("assessment/", {title, description, user}).then((response)=>{
      assessment = response.data._id
      localStorage.setItem('assessment',assessment)
    }).catch((error) =>{
      console.log(error)
    })
    
    respostas.forEach(function(resposta, i) {
      
      let {item} = resposta
      let objective_answer  = item.valor
      let questionId = item.question
      
      let comentario
      try{
        comentario = comment[item.id].item 
      }catch{
        comentario = null;
      }
      
      let answerBody
      if (comentario){
         answerBody = {assessment, question: questionId, objective_answer, comments:comentario}
      }else{
        answerBody = {assessment, question: questionId, objective_answer}
      }
      console.log(answerBody)
      const returnPostAnswer =  api.post("answer/", answerBody).then((response)=>{
          console.log('Enviou')
      }).catch((error) =>{
        console.log(error)
      })
      
    })

    navigate("/answers")
  }

  function onChange(valor, idQuestao, question){
      /*let resposta = {id:idQuestao, valor, question}
      let copiaRespostas = respostas
      let result = respostas.findIndex(function(object) {
        return object.id === idQuestao;
      });
      copiaRespostas.splice(result, 1)
      setRespostas([...copiaRespostas, resposta])*/
    
    atualizaAnswer(idQuestao, {id:idQuestao, valor, question})
  }

  function onChangeComentario(valor, idQuestao){
    atualizaComment(idQuestao, valor)  
  }

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
                  <th id="t_comentario">Comentraio</th>
                </tr>
              </thead>
              <tbody>
                {question.map((item, i) => {
                  atualizaAnswer(item.number, {id:item.number, valor:'Y', question:item._id})
                  return (
                    <>
                      <tr id={item}>
                        <td id={item.number}>{item.number}</td>
                        <td id={item.enunciation}>{item.enunciation}</td>
                        <td><input type="text" name={item.comentario} onChange={(e) => onChangeComentario(e.target.value, item.number)}/></td>
                        <td><input type="radio" value="Y" name={item.number} defaultChecked  onChange={(e) => onChange(e.target.value, item.number, item._id)}/>SIM  </td>
                        <td><input type="radio" value="N" name={item.number} onChange={(e) => onChange(e.target.value, item.number, item._id)}/>NÃO  </td>
                        <td><input type="radio" value="X" name={item.number} onChange={(e) => onChange(e.target.value, item.number, item._id)}/>N/A  </td>
                        <td><input type="radio" value="P" name={item.number} onChange={(e) => onChange(e.target.value, item.number, item._id)}/>ADIAR  </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
              <td>
                <button onClick={() => Navegacao()}>Responder</button>
              </td>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions

