'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {});
  
  alumno.associate = models => {
    alumno.belongsToMany(models.materia, {through: 'alumnoMateria' })
  };

  return alumno;
};