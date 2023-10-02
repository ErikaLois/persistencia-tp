'use strict';
const materia = require("./materia");
const alumno = require("./alumno");

module.exports = (sequelize, DataTypes) => {
  const alumnoMateria = sequelize.define('alumnoMateria', {
    materiaId: {
        type: DataTypes.INTEGER,
        references: {
            model: materia,
            key: 'id'
        }
    },
    alumnoId: {
        type: DataTypes.INTEGER,
        references: {
            model: alumno,
            key: 'id'
        }
    }
  }, {});
  
  return alumnoMateria;
};