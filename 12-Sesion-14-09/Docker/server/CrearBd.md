# Entrar en el contenedor de PostgreSQL
docker exec -it serve-postgres bash

# Conectarse a PostgreSQL
psql -U postgres

# Crear una base de datos llamada 'mydatabase'
CREATE DATABASE mydatabase;

# Conectarse a la base de datos 'mydatabase'
\c mydatabase

# Crear esquemas dentro de 'mydatabase'
CREATE SCHEMA schema1;
CREATE SCHEMA schema2;
