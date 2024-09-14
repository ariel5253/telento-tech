# Instalación de Docker en Ubuntu 24.04 LTS

## Pasos para la instalación

```bash
# 1. Var vrsión y actualizar la lista de paquetes
Versión del SO: `lsb_release -a`
sudo apt update

# 2. Instalar los paquetes necesarios para usar un repositorio HTTPS
sudo apt install apt-transport-https ca-certificates curl software-properties-common

# 3. Agregar la clave GPG oficial de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 4. Agregar el repositorio de Docker a las fuentes de APT
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# 5. Actualizar la lista de paquetes nuevamente
sudo apt update

# 6. Asegurarse de instalar Docker desde el repositorio de Docker en lugar del repositorio predeterminado de Ubuntu
apt-cache policy docker-ce

# 7. Instalar Docker
sudo apt install docker-ce

# 8. Verificar que Docker esté funcionando correctamente
sudo systemctl status docker

# 9. Crear el grupo 'docker' si no existe
sudo groupadd docker

# 10. Añadir tu usuario al grupo 'docker'
sudo usermod -aG docker $USER

# 11. Cerrar sesión y volver a iniciarla para que los cambios surtan efecto

# 12. Verificar que puedes ejecutar Docker sin 'sudo'
docker run hello-world
```