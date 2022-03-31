// carrega as variaveis de ambiente 
require('dotenv').config()

// Exibindo as variaveis de ambiente no console (teste)

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const dbConnection = require('./config/database')
dbConnection()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*************************** ROTAS ********************** */

const glossary = require('./routes/glossary')
app.use('/glossary', glossary)


/******************************************************** */

module.exports = app;
