import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/Auth/AuthContext'

import { api } from '../../services/api.js'

import './Login.css';


//function initialState() {
//  return { email: '', password: '' };
//}


const UserLogin = () => {
  const auth = useContext(AuthContext);

//  const [values, setValues] = useState(initialState);
//  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

    const retorno = await api.post("user/login", { email, password })

//    const retorno = await auth.signin(email, password )
    
    if (retorno) {
      console.log("Logado")
      localStorage.setItem('x-access-token', retorno.data.token)

      navigate('/Home')
    } else {
      console.log("Não autorizado!")
    }

    console.log("Voltei!")
    console.log("Retorno: "+retorno.data.token)

//    setValues(initialState);
  }

  return (
    <div className="user-login">
      <p id='texto'> Acessar o Sistema </p>
      <form onSubmit={onSubmit}>

        <div className="user-login__form-control">
          <label id='lblemail' htmlFor="email">Usuário:</label>
          <input id="email" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <br></br>
        <div className="user-login__form-control">
          <label id='lblpassword' htmlFor="password">Senha:</label>
          <input id="password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
{/* 
        {error && (
          <div id='erro' className="user-login__error">{error}</div>
        )}
*/}
        <button id='btnEntrar' type="submit" className="btn btn-info">Entrar</button>

      </form>

    </div>

  )

}



export default UserLogin;
