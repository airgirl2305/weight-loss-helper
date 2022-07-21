require("dotenv").config();

const { DB_USERNAME, DB_USER_PASSWORD, DB_NAME, DB_HOST, DB_PORT, DB_DIALECT } =
  process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_USER_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    /* Чтобы sequelize следил за сидерами (не накатывались те сидеры,
    которые уже были добавлены в БД, аналогично миграциям)*/
    // Определяем другой тип хранилища. По умолчанию: none
    seederStorage: "json",
    // Определяем другое название для файла. По умолчанию: sequelize-data.json
    seederStoragePath: "sequelizeData.json",
    // Определяем другое название для таблицы. По умолчанию: SequelizeData
    seederStorageTableName: "SequelizeData",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
  },
};
