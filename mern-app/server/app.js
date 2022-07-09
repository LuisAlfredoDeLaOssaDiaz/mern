const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

// Load routings
// ....
console.log(API_VERSION)
// ------------------------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({extended: false})); // Configuracion del bodyParser
app.use(bodyParser.json());                        // Configuracion del bodyParser
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Configure Header HTTP
// ....
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Router Basic
// ....
// ------------------------------------------------------------------------------------------------

module.exports = app;