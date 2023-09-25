'use strict';
const materia = require("./materia");
const carrera = require("./carrera");

module.exports = (sequelize, DataTypes) => {
  const materiaCarrera = sequelize.define('materiaCarrera', {
    materiaId: {
        type: DataTypes.INTEGER,
        references: {
            model: materia,
            key: 'id'
        }
    },
    carreraId: {
        type: DataTypes.INTEGER,
        references: {
            model: carrera,
            key: 'id'
        }
    }
  }, {});
  
  return materiaCarrera;
};