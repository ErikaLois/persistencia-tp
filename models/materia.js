'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    catedra: DataTypes.STRING
  }, {
    tableName: 'materias',
    freezeTableName: true
  });
  
  return materia;
};