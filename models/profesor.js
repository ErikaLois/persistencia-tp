'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {
    tableName: 'profesores',
    freezeTableName: true});
  
  return profesor;
};