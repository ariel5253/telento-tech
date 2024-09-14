DROP DATABASE IF EXISTS library;
CREATE DATABASE library;
USE library;

-- Crear tabla persona
CREATE TABLE persona (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    celular VARCHAR(20),
    correo VARCHAR(50),
    direccion VARCHAR(50),
    edad INT,
    estado BIT(1),
    nombre VARCHAR(50)
);

-- Crear tabla usuario
CREATE TABLE usuario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    contrasenia VARCHAR(50),
    usuario VARCHAR(50),
    persona_id BIGINT,
    FOREIGN KEY (persona_id) REFERENCES persona(id)
);

-- Crear tabla usuario
CREATE TABLE autor(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	codigo BIGINT NOT NULL UNIQUE,
	persona_id BIGINT,
	FOREIGN KEY (persona_id) REFERENCES persona(id)
);

-- Crear tabla libro
CREATE TABLE libro(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	codigo INT NOT NULL UNIQUE,
	nombre VARCHAR(50) NOT NULL
);

CREATE TABLE ejemplar (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,  
  codigo VARCHAR(15),
  localizacion INT,
  id_libro BIGINT,
  FOREIGN KEY (id_libro) REFERENCES libro(id) 
);


CREATE TABLE  autor_libro(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	id_libro BIGINT,
	id_autor BIGINT,
	FOREIGN KEY (id_libro) REFERENCES libro(id),
	FOREIGN KEY (id_autor) REFERENCES autor(id)		
);
