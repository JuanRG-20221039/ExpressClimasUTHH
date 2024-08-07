import { DataTypes } from 'sequelize';
import db from '../config/sequelize.js'; 
import Iot from './model_iot.js';

const VinculacionIot = db.define('VinculacionIot', {
    Id_vinculacion_iot: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_placa_principal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Iot,
            key: 'Id_iot'
        }
    },
    Id_Placa_secundaria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Iot,
            key: 'Id_iot'
        }
    }
}, {
    tableName: 'tbl_vinculacion_iot',
    timestamps: false
});

// Definir las relaciones
VinculacionIot.belongsTo(Iot, { as: 'PlacaPrincipal', foreignKey: 'Id_placa_principal' });
VinculacionIot.belongsTo(Iot, { as: 'PlacaSecundaria', foreignKey: 'Id_Placa_secundaria' });

export default VinculacionIot;
