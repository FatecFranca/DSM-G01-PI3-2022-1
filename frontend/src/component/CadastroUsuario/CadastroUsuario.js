import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/Auth/AuthContext'

import { api } from '../../services/api.js'
import './CadastroUsuario.css';
import Cabecalho from '../Cabecalho/Cabecalho'


const CadastroUsuario = () => {
  
  const [emailCadastro, setEmail] = useState('')
  const [passwordCadastro, setPassword] = useState('')
  const [msg, setMsg] = useState('');
  const [fullname, setFullName] = useState('')

  const navigate = useNavigate()
  
  async function onSubmit(e) {
    e.preventDefault();
    
    console.log("Usuário.: " + emailCadastro)
    console.log("Senha...: " + passwordCadastro)

    console.log(JSON.stringify({ fullname, email:emailCadastro, email_confirmed:false, password:passwordCadastro }))
    const retorno = await api.post("user/", { fullname, email:emailCadastro, email_confirmed:true, password:passwordCadastro }).then(()=>{
      navigate('/')
    }).catch(() =>{
      setMsg("Erro ao cadastrar novo usuário")
    })
  }

  return (
          
          <div id="cadastro">
          <Cabecalho />
          <h2 className="title">Novo Usuário</h2>
          <form className="form" onSubmit={onSubmit}>
          <div className="field">
                <label htmlFor="nome">Nome</label>
                <input type="text" name="fullName" id="fullName" placeholder='Digite seu nome completo' value={fullname} onChange={(e) => setFullName(e.target.value)}/>
            </div>  
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="emailCadastro" id="emailCadastro" placeholder='Digite seu e-mail' value={emailCadastro} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="password">Senha</label>
                <input type="password" name="passwordCadastro" id="passwordCadastro" placeholder='Digite sua senha' value={passwordCadastro} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br></br>
            <p className='msgErro'>{String(msg)}</p>
            <div id='btnCadastro' className="actions">
                <button type="submit">Cadastrar</button>
            </div>
          </form>
      </div>
      
      
    
  )

}



export default CadastroUsuario;