const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const sql = require('./consultas');

//configuracion inicial
const app = express();
app.set('port');
app.listen(app.get('port'));
console.log('Activado');

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

//rutas
app.get('/productos', async (req,res)=>{
    const conexion = await db.getConnection();
    
    const result = await conexion.query(sql.getListar_p())
    //console.log(result)
    res.json(result)
});

app.post('/productos', async (req, res) => {
    const producto = req.body;
    const conexion = await db.getConnection();
    //console.log(producto)
    conexion.query(sql.postProducto(producto));
    conexion.commit();
    res.status(201).json({ message: 'Producto creado exitosamente' });
  });

app.put('/productos/:id', async (req, res) => {
    const conexion = await db.getConnection();
    const id = parseInt(req.params.id); 
    const producto = req.body;
  
    //console.log(id)
    //console.log(producto)
    
    conexion.query(sql.putProducto(producto,id));
    conexion.commit();
    res.status(201).json({ message: 'Producto modificado exitosamente' });

  });

  app.delete('/productos/:id', async (req, res) => {
    const conexion = await db.getConnection();
    const id = parseInt(req.params.id); 
  
    //console.log(id)
    
    conexion.query(sql.deleteProducto(id));
    conexion.commit();
    res.status(201).json({ message: 'Producto eliminado exitosamente' });

  });


app.get('/categorias', async (req,res)=>{
    const conexion = await db.getConnection();
    
    const result = await conexion.query(sql.getListar_c())
    //console.log(result)
    res.json(result)
});