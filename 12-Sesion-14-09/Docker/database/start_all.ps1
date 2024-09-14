# Desde la subcarpeta mysql
docker-compose -p databases -f ./mysql/docker-compose.yml up -d

# Desde la subcarpeta mongo
docker-compose -p databases -f ./mongo/docker-compose.yml up -d

# Desde la subcarpeta postgres
docker-compose -p databases -f ./postgres/docker-compose.yml up -d

# Desde la subcarpeta sqlserver
docker-compose -p databases -f ./sqlserver/docker-compose.yml up -d
