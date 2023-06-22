require("dotenv").config({ path: "./config.env" });

module.exports = {
  HOST: process.env.DATABASE_URL,
  SQL_PORT: process.env.SQL_PORT,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
