create database CaC_2024_NodeJS;
use CaC_2024_NodeJS;

create table categoria(
id int auto_increment primary key
, nombre varchar(50)
);

create table productos(
id int auto_increment primary key
, nombre varchar(50)
, precio decimal(10,2)
, imagen varchar(255)
, stock int
,categoria int
,FOREIGN KEY (categoria) REFERENCES categoria(id)
);

create table log_producto(
id int auto_increment primary key
, nombre varchar(50)
, precio decimal(10,2)
, fecha_hora datetime
, usuario varchaR(100) DEFAULT(user())
, accion varchar(20)
);

create table usuarios(
id int auto_increment primary key
, nombre varchar(100)
, apellido varchar(100)
, mail varchar(150) unique
, pass char(100)
, fecha_hora datetime DEFAULT(now())
);

drop trigger modif_registro
delimiter //

create trigger alta_registro
AFTER INSERT ON productos
FOR EACH ROW
BEGIN
	INSERT INTO log_producto(nombre,precio,fecha_hora,accion) VALUES
	(new.nombre,new.precio,now(),'Creación');
END//

create trigger modif_registro
AFTER update ON productos
FOR EACH ROW
BEGIN
	INSERT INTO log_producto(nombre,precio,fecha_hora,accion) VALUES
	(new.nombre,new.precio,now(),'Modificación');
END//

create trigger baja_registro
after delete ON productos
FOR EACH ROW
BEGIN
	INSERT INTO log_producto(nombre,precio,fecha_hora,accion) VALUES
	(old.nombre,old.precio,now(),'Eliminación');
END//
