import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/Auth/AuthContext'

import { api } from '../../services/api.js'
import './Login.css';
import Cabecalho from '../Cabecalho/Cabecalho'

//function initialState() {
//  return { email: '', password: '' };
//}


const UserLogin = () => {
  const auth = useContext(AuthContext);

//  const [values, setValues] = useState(initialState);
//  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [autorizado, setAutorizado] = useState('');

  const navigate = useNavigate()
  const contexto = useContext(AuthContext)
  
  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    setEmail(data.email)
    setPassword(data.password)

    console.log("Usuário.: " + email)
    console.log("Senha...: " + password)
    console.log('Contexto: ' + contexto)

    const retorno = await api.post("user/login", { email, password }).then((response)=>{
      localStorage.setItem('x-access-token', response.data.token)
      navigate('/home')
    }).catch((error) =>{
      setAutorizado("Usuário ou senha inválido")
    })
  }

  return (
          
          <div id="login">
          <Cabecalho />
          <h1 className="title">Login</h1>
          <form className="form" onSubmit={onSubmit}>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password"  placeholder='Digite sua senha...' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br></br>
            <p className='msgErro'>{String(autorizado)}</p>
            <div id='btnEntrar' className="actions">
                <button type="submit">Entrar</button>
            </div>
            <div className='cadastro'>
                <a href={"/CadastroUsuario"} color={'black'}>Cadastre-se</a>
            </div>
          </form>
      </div>

  )

}



export default UserLogin;