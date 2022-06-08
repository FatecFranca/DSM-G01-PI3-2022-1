import React from "react";
import Login from "./component/Login/Login.js"
import Home from "./component/Home/Home.js"
import QuestionsGroup from "./component/QuestionsGroup/QuestionsGroup.js";
import Answers from "./component/Answers/Answers.js";
import Users from "./component/Users/Users.js";
import CadastroUsuario from './component/CadastroUsuario/CadastroUsuario.js'

import { Route, Routes } from 'react-router-dom'
import Questions from "./component/Questions/Questions.js";

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/logout" element={<Login/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/questionsGroup" element={<QuestionsGroup/>} />
            <Route exact path="/answers" element={<Answers/>} />
            <Route exact path="/users" element={<Users/>} />
            <Route exact path="/cadastroUsuario" element={<CadastroUsuario/>} />
            <Route exact path="/question" element={<Questions/>} />

        </Routes>
    );
}

export default Routers

