import React from "react";
import { Link } from 'react-router-dom'
import "./MenuHorizontal.css"

function MenuHorizontal() {
//  const navigate = useNavigate()
  return (
    <div className="menuHorizontal">
      <nav className='navMenu'>
                <ul>
                    <li> <Link to="/"> Login </Link> </li>
                    <li> <Link to="/logout"> Logout </Link> </li>
                    <li> <Link to="/questions"> Questions </Link> </li>
                    <li> <Link to="/answers"> Answers </Link> </li>
                    <li> <Link to="/users"> Users </Link> </li>
                </ul>

            </nav>

    </div>
  );
}

export default MenuHorizontal;
