const express = require('express')
const connection = require("./db/mysql_connect")
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT)