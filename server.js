const express = require ('express')
const path = require ('path')
const app = express ()
require('dotenv').config()
app.use ('/app', express.static (path.join (__dirname, '/public')))

var port = process.env.PORT || 3000;
app.listen(port)