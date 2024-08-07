import { DataTypes } from 'sequelize';
import db from '../config/sequelize.js'; 
import Edificio from './model_edificios.js';

const Aula = db.define('tbl_aulas', {
  Id_aula: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre_aula: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Id_edificio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Id_tipo_aula: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

// Definir asociaciones
Aula.belongsTo(Edificio, { foreignKey: 'Id_edificio', as: 'edificio' });

export default Aula;
