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