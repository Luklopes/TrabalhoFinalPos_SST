const express = require ('express')
const path = require ('path')
const cors = require ('cors')
const app = express ()
require('dotenv').config()
const apiRouter = require('./api/routes/apiRouter')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use ('/app', express.static (path.join (__dirname, '/public')))
app.use ('/api', apiRouter)

var port = process.env.PORT || 3000;
app.listen(port)