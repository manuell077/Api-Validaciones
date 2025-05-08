use validacion;
drop database validacion;
create database validacion;

create table generos(
	id_genero int auto_increment,
	genero varchar(10),
	primary key(id_genero));
    
create table ciudades(
	id_ciudad int auto_increment,
	ciudad varchar(50),
	primary key(id_ciudad));
    
create table lenguajes(
	id_lenguaje int auto_increment,
	nombre_lenguaje varchar(30),
	primary key(id_lenguaje));

describe usuarios;


create table usuarios(
     documento int  primary key,
     nombre_usuario varchar(60),
     apellido varchar(50),
     telefono int (10),
     contrasena varchar(40),
     genero int,
     ciudad int , 
     foreign key(genero) references  generos(id_genero)on delete set null ,
     foreign key(ciudad) references ciudades(id_ciudad) on delete set null
	
);	

drop table usuarios;

create table lenguaje_usuario(
    documento_usuario int,
    id_lenguaje int,
    foreign key(documento_usuario) references usuarios(documento) on delete set null,
    foreign key(id_lenguaje)references lenguajes(id_lenguaje) on delete set null);


update ciudades set ciudad = "Bucaramanga" where id_ciudad = 4;
insert into ciudades(ciudad)values("Bucaramanga");

insert into generos(genero) values("Masculino");

insert into usuarios(documento,nombre_usuario,apellido,telefono,contrasena,genero,ciudad)values(1097782507,"Manuel","Ardila",322912741,"manuel270905",1,1);


