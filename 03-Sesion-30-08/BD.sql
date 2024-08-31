-- Eliminar base de datos si existe.
DROP DATABASE IF EXISTS biblioteca;

-- Crear base de datos 
CREATE DATABASE biblioteca;

-- USAR BASE DE DATOS 
USE biblioteca;

-- CREAR ENTIDADES
CREATE TABLE autor(
	id INT PRIMARY KEY AUTO_INCREMENT,
	codigo INT NOT NULL UNIQUE,
	nombre VARCHAR(50) NOT NULL
);

CREATE TABLE libro(
	id INT PRIMARY KEY AUTO_INCREMENT,
	codigo INT NOT NULL UNIQUE,
	nombre VARCHAR(50) NOT NULL
);

CREATE TABLE ejemplar (
  id INT PRIMARY KEY AUTO_INCREMENT,  
  codigo VARCHAR(15),
  localizacion INT,
  id_libro INT,
  CONSTRAINT fk_ejemplar_id_book_libro_id FOREIGN KEY (id_libro) REFERENCES libro(id) 
);


CREATE TABLE  autor_libro(
	id INT PRIMARY KEY AUTO_INCREMENT,
	id_libro INT,
	id_autor INT,
	CONSTRAINT fk_libro FOREIGN KEY (id_libro) REFERENCES libro(id),
	CONSTRAINT fk_autor	FOREIGN KEY (id_autor) REFERENCES autor(id)		
);
