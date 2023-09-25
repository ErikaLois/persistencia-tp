'use strict';

const materiaCarrera = require("./materiaCarrera");

module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING
  }, {});
  

  carrera.associate = models => {
    carrera.belongsToMany(models.materia, {through: 'materiaCarrera'})
  };

  return carrera;
};


