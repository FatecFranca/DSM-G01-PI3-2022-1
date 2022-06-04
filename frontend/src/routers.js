import React from "react";
import Login from "./component/Login/Login.js"
import Home from "./component/Home/Home.js"
import Questions from "./component/Questions/Questions.js";
import Answers from "./component/Answers/Answers.js";
import Users from "./component/Users/Users.js";

import { Route, Routes } from 'react-router-dom'

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/logout" element={<Login/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/questions" element={<Questions/>} />
            <Route exact path="/answers" element={<Answers/>} />
            <Route exact path="/users" element={<Users/>} />


        </Routes>
    );
}

export default Routers

