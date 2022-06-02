const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    port:process.env.DB_PORT
});

connection.connect((error)=>{
    if (error) {
      console.log(`Este es el error ${error}`);
      return;
    }
    console.log('Conexion exitosa!!!');
    
  });
module.exports = connection;