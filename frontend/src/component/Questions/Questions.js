import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";

import Rodape from "../Rodape/Rodape";

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
      <Cabecalho />
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

                  <th id="novo"> <a className="btn btn-success btn-block">Novo Registro</a> </th>
                </tr>
              </thead>
              <tbody>
                {question.map((item, i) => {
                  return (
                    <>
                      <tr>
                        <td id="p_numero">{item.number}</td>
                        <td id="p_enunciado">{item.enunciation}</td>

                        <td id="editar"> <a className="btn btn-primary btn-block">Editar</a> </td>
                        <td id="ativar"> <a className="btn btn-danger btn-block">Ativar/Inativar</a> </td>
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

      <Rodape />
    </div>
  );
}

export default Questions

