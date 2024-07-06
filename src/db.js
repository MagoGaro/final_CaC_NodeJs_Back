const mysql = require('promise-mysql');
const dotenv = require('dotenv');
dotenv.config();

async function getConnection() {
    try {
      const connection = await mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
        port: process.env.PORT
      });
  
      console.log('conectado Satisfactoriamente');
      return connection;
    } catch (error) {
      console.error('Error al intentar conectar:', error); 
      throw error; 
    }
  }

module.exports = {
    getConnection
}
