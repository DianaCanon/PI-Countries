const {DataTypes, Sequelize} = require("sequelize");

module.exports = sequelize => {
    sequelize.define('activity', {
        idActivity:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        }, 
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        temporada: {
            type: DataTypes.ENUM(["Verano", "Otoño", "Invierno", "Primavera"]),
            allowNull: false
        },
        
    })
}