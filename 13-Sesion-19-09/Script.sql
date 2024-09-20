DROP DATABASE IF EXISTS library;
CREATE DATABASE library;
USE library;

-- Crear tabla persona
CREATE TABLE persona (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    celular VARCHAR(20),
    correo VARCHAR(50),
    direccion VARCHAR(100),
    edad INT,
    estado BIT(1),
    nombre VARCHAR(100)
);

-- Crear tabla usuario
CREATE TABLE usuario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    contrasenia VARCHAR(100),
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
	nombre VARCHAR(255) NOT NULL
);

CREATE TABLE ejemplar (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,  
  codigo INT,
  localizacion VARCHAR(255),
  libro_id BIGINT,
  FOREIGN KEY (libro_id) REFERENCES libro(id) 
);


CREATE TABLE  autor_libro(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	libro_id BIGINT,
	autor_id BIGINT,
	FOREIGN KEY (libro_id) REFERENCES libro(id),
	FOREIGN KEY (autor_id) REFERENCES autor(id)		
);
