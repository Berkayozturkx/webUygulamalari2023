const express = require('express')
const connection = require("./db/mysql_connect")
const router=require("./routers")
require('dotenv/config')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use("/api", router)
app.listen(process.env.PORT)