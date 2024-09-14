# Usa la imagen base de Jenkins
FROM jenkins/jenkins:lts

# Cambia al usuario root para instalar paquetes
USER root

# Instalar sudo, Docker, tini y otras dependencias necesarias
RUN apt-get update && \
    apt-get install -y sudo apt-transport-https ca-certificates curl gnupg2 software-properties-common && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
    apt-get update && \
    apt-get install -y docker-ce docker-ce-cli containerd.io tini

# Instalar Docker Compose
RUN curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose && \
    ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# Agregar el usuario jenkins al grupo docker
RUN usermod -aG docker jenkins

# Configurar sudo para no pedir contraseña al usuario jenkins
RUN echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# Volver a cambiar al usuario Jenkins
USER jenkins

# Exponer los puertos necesarios
EXPOSE 8080 50000

# Ejecutar el script de inicio de Jenkins con tini
ENTRYPOINT ["/usr/bin/tini", "--", "/usr/local/bin/jenkins.sh"]