# 1. Permitir conexiones SSH
sudo ufw allow ssh

# 2. Permitir el puerto 80
sudo ufw allow 80

# 2. Permitir el puerto 8080
sudo ufw allow 8080

# 3. Permitir el puerto 9000
sudo ufw allow 9000

# 4. Permitir el puerto 5432
sudo ufw allow 5432

# 4. Permitir el puerto 3306
sudo ufw allow 3306

# 3. Habilitar ufw
sudo ufw enable

# 4. Verificar el estado de ufw
sudo ufw status


# Para eliminar: 
sudo ufw delete allow 80/tcp6
sudo ufw delete allow 9000/tcp6
sudo ufw delete allow 3306/tcp6

# Ver el estado y las reglas de ufw
    sudo ufw status verbose

# Listar todas las reglas de firewalld
sudo firewall-cmd --list-all

# Listar las reglas permanentes de firewalld
sudo firewall-cmd --list-all --permanent

# Listar las reglas de iptables
sudo iptables -L -n -v
