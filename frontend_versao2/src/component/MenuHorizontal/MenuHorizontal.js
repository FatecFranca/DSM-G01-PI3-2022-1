import React from "react";
import { Link } from 'react-router-dom'
import "./MenuHorizontal.css"

function MenuHorizontal() {
//  const navigate = useNavigate()
  return (
    <div className="menuHorizontal">
      <nav className='navMenu'>
                <ul>
                    <li> <Link to="/home"> Inicio </Link> </li>
                    <li> <Link to="/logout"> Logout </Link> </li>
                    <li> <Link to="/questionsGroup"> Questões </Link> </li>
                    <li> <Link to="/answers"> Respostas </Link> </li>
                    <li> <Link to="/users"> Usuarios </Link> </li>
                </ul>

            </nav>

    </div>
  );
}

export default MenuHorizontal;
