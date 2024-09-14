#!/bin/bash

# Instalación de Docker Desktop
echo "Instalando Docker Desktop..."
cd ~/Descargas
sudo dpkg -i docker-desktop-amd64.deb
sudo apt-get install -f

# Instalación de pass y gpg
echo "Instalando pass y gpg..."
sudo apt-get update
sudo apt-get install -y pass gnupg2

# Generar una nueva clave GPG
echo "Generando una nueva clave GPG..."
gpg --batch --gen-key <<EOF
%no-protection
Key-Type: RSA
Key-Length: 4096
Subkey-Type: RSA
Subkey-Length: 4096
Name-Real: Jesús Ariel González Bonilla
Name-Email: ariel5253@hotmail.com
Expire-Date: 0
EOF

# Obtener el ID de la clave GPG
KEY_ID=$(gpg --list-secret-keys --keyid-format LONG | grep '^sec' | awk '{print $2}' | cut -d'/' -f2)
echo "ID de la clave GPG: $KEY_ID"

# Inicializar pass con la clave GPG
echo "Inicializando pass con la clave GPG..."
pass init $KEY_ID

# Probar pass
echo "Probando pass..."
echo "password" | pass insert -m test/password
pass test/password

# Abrir Docker Desktop
echo "Abriendo Docker Desktop..."
/usr/bin/docker-desktop &

# Verificar la versión de Docker
echo "Verificando la versión de Docker..."
docker --version

# Ejecutar un contenedor de prueba
echo "Ejecutando un contenedor de prueba..."
docker run hello-world

echo "Configuración completada."
