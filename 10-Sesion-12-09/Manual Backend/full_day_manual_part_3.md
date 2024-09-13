
## 13. Migraciones con Sequelize

Para realizar migraciones con Sequelize, sigue los siguientes pasos:

1. Instala Sequelize CLI si no lo has hecho:
```bash
npm install --save-dev sequelize-cli
```

2. Inicializa Sequelize en tu proyecto:
```bash
npx sequelize-cli init
```

3. Crea una migración para la entidad `Persona`:
```bash
npx sequelize-cli migration:generate --name create-persona
```

4. Crea una migración para la entidad `Usuario`:
```bash
npx sequelize-cli migration:generate --name create-usuario
```

5. Define las migraciones en los archivos de migración generados en la carpeta `migrations`.

Ejemplo de migración para `Persona`:
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('persona', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('persona');
  },
};
```

Ejemplo de migración para `Usuario`:
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contrasenia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      persona_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'persona',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario');
  },
};
```

6. Ejecuta las migraciones:
```bash
npx sequelize-cli db:migrate
```

## 14. Conclusión

Este manual cubre todo el proceso de creación de una API REST en **Express.js** con conexión a **MySQL** utilizando **Sequelize**. Desde la creación del proyecto hasta la configuración de las migraciones, se han detallado todos los pasos necesarios.
