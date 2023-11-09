const mysql = require('mysql');
require("dotenv/config")
var connection = mysql.createConnection({
  user: process.env.MYSQL_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  host: process.env.MYSQL_INSTANCE_NAME
});
connection.query((err)=>{
    if (!err) {
      console.log("Veritabanına Bağlandı");
    }else{
        console.log("Bağlantı Hatası")
    }
});
  module.exports=connection
