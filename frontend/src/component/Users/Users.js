import React from "react";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Template from "../Template/Template.js"

import { useEffect, useState } from "react";
import { api } from '../../services/api.js'

import "./Users.css"

//export default function Questions() {
function Users() {  
  const [user, setUser] = useState([])
  var id = localStorage.getItem('userId')
  useEffect(() => {
    api.get('user/')
      .then(response => setUser(response.data))

  }, []);
 

  return (
    <div className="user">
      <Template/>
      <MenuHorizontal />

      <div id="areaUser">
        <div id="idUser">
          <legend>Usuários Cadastrados</legend>
          <div className="tabela">
            <table className="table table-responsive">
              <thead>
                <tr id="titulo">
                  <th id="t_nome">Nome</th>
                  <th id="t_email">Email</th>

                  
                </tr>
              </thead>
              <tbody>
                {user.map((item, i) => {
                  return (
                    <>
                      <tr id={item}>
                        <td id={item.nome}>{item.fullname}</td>
                        <td id={item.email}>{item.email}</td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
              <tfoot>
                <tr id="registros">
                  <td>Total de Registros: {user.length}</td>
                </tr>
              </tfoot>

            </table>

          </div>

        </div>


      </div>

    </div>
  );
}

export default Users
