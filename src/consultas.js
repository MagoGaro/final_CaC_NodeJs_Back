const getListar_p = ()=> `SELECT p.id,p.nombre,p.precio,p.stock,p.imagen,c.nombre as 'categoria', c.id as 'id_c'
FROM productos as p
join categoria as c
on p.categoria = c.id;
`;

const getListar_c = ()=> `SELECT *
FROM categoria;
`;

const postProducto = (producto)=> `INSERT INTO productos VALUES
('NULL','${producto.nombre}',${parseFloat(producto.precio)},'${producto.imagen}',${parseInt(producto.stock)},${parseInt(producto.categoria)});
`;

const putProducto = (producto,id)=> `UPDATE productos SET
nombre = '${producto.nombre}',
precio = ${parseFloat(producto.precio)},
stock = ${parseInt(producto.stock)},
categoria = ${parseInt(producto.categoria)},
imagen = '${producto.imagen}'
WHERE id = ${id} ;
`;

const deleteProducto = (id)=> `DELETE FROM productos WHERE id = ${id} ;
`;

const getListar_l = ()=> `SELECT *
FROM log_producto;
`;



module.exports = {
    getListar_p,
    getListar_c,
    postProducto,
    putProducto,
    deleteProducto,
    getListar_l
}
