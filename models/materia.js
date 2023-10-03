'use strict';

const materiaCarrera = require("./materiaCarrera");



module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    catedra: DataTypes.STRING
  }, {
    tableName: 'materias',
    freezeTableName: true
  });
  
  materia.associate = models => {
    materia.belongsToMany(models.carrera, {through: 'materiaCarrera' })
  };

  materia.associate = models => {
    materia.belongsToMany(models.alumno, {through: 'alumnoMateria' })
  };

  materia.associate = function(models) {
    materia.hasOne(models.profesor, {
      as: 'profesor',
      foreignKey: 'profesorId'
    })
  };

  return materia;
};

