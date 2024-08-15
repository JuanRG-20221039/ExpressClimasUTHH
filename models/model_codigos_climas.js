import { DataTypes } from 'sequelize';
import db from '../config/sequelize.js'; 
import Marca from './model_marca.js'; // Asegúrate de importar el modelo Marca

const CodigoClima = db.define('tbl_codigos_climas', {
    Id_codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_marca: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tbl_marca', // El nombre de la tabla de referencia
            key: 'Id_marca' // La clave primaria en la tabla de referencia
        }
    },
    Clave: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tbl_codigos_climas',
});

// Definir la relación con el modelo Marca
CodigoClima.belongsTo(Marca, { foreignKey: 'Id_marca' });
Marca.hasMany(CodigoClima, { foreignKey: 'Id_marca' });

export default CodigoClima;
