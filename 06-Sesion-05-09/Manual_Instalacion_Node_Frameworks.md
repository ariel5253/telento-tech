
# Manual de Instalación de Node.js, Frameworks Frontend y Backend

## 1. Instalar Node.js
   Para instalar Node.js, ve a la página oficial y selecciona tu sistema operativo:
   [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)

   Una vez que hayas instalado Node.js, abre una terminal y ejecuta el siguiente comando para verificar la instalación:

   ```bash
   node -v
   ```

   Esto mostrará la versión instalada de Node.js.

### Instalar última versión de npm:
   ```bash
   npm install -g npm@latest
   ```

   Para verificar la versión de `npm` instalada:

   ```bash
   npm -v
   ```

## 2. Instalar frameworks

### Frontend

#### Vue.js

- **Instalar Vue.js:**

   ```bash
   npm install -g @vue/cli
   ```

- **Ver la versión instalada de Vue.js:**

   ```bash
   vue --version
   ```

#### Angular

- **Instalar Angular CLI globalmente:**

   ```bash
   npm install -g @angular/cli
   ```

- **Ver la versión instalada de Angular:**

   ```bash
   ng --version
   ```

#### React

- **Instalar `create-react-app` para iniciar proyectos de React rápidamente:**

   ```bash
   npm install -g create-react-app
   ```

- **Verificar la instalación de React:**

   Para crear un nuevo proyecto de React y verificar la versión:

   ```bash
   npx create-react-app my-app
   cd my-app
   npm start
   ```

### Backend

#### Express.js

- **Instalar Express globalmente:**

   ```bash
   npm install -g express-generator
   ```

- **Ver la versión de Express:**

   ```bash
   express --version
   ```

## Resumen de Comandos Clave

```bash
# Ver versión de Node.js
node -v

# Ver versión de npm
npm -v

# Instalar Vue.js CLI globalmente
npm install -g @vue/cli

# Ver versión de Vue.js
vue --version

# Instalar Angular CLI globalmente
npm install -g @angular/cli

# Ver versión de Angular CLI
ng --version

# Instalar React globalmente
npm install -g create-react-app

# Instalar Express.js Generator globalmente
npm install -g express-generator

# Ver versión de Express.js Generator
express --version
```
