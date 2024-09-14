# Crear red: 
`
docker network create network_local_server
`

# Ver red: 
`
docker network ls
`

# Eliminar todo: 
`
docker stop $(docker ps -aq); docker rm $(docker ps -aq); docker rmi $(docker images -q); docker volume rm $(docker volume ls -q); docker network rm $(docker network ls -q)
`

# Detener y eliminar todos los contenedores: 
`
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
`

# Eliminar todas las imágenes:
`
docker rmi $(docker images -q)
`

# Eliminar todos los volúmenes:
`
docker volume rm $(docker volume ls -q)
`

# Eliminar todas las redes:
`
docker network rm $(docker network ls -q)
`

# Construcción de docker:
`
docker-compose down
`

# Ejecución de docker:
`
docker-compose up -d --build
`

# Acceder al bash
docker exec -it serve-mysql2 bash

# Ver infomración de la base de datos
Usando el Cliente MySQL Dentro del Contenedor
SHOW VARIABLES LIKE 'port';

# Acceder al server
docker exec -it --user root jenkins bash
docker exec -it web-native bash
