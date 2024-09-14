# 1. Descargar la versión más reciente de Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 2. Aplicar permisos ejecutables al binario descargado
sudo chmod +x /usr/local/bin/docker-compose

# 3. Verificar la instalación de Docker Compose
docker-compose --version
