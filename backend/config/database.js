const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ramal", "root", "S@010203", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pools: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
