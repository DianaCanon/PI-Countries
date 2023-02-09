const {DataTypes, Sequelize} = require("sequelize");

module.exports = sequelize => {
    sequelize.define('activity', {
        idActivity:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        }, 
        Duración: {
            type: DataTypes.INTEGER
        },
        Temporada: {
            type: DataTypes.ENUM(["Verano", "Otoño", "Invierno ", "Primavera"])
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaulValue: true
        }
    })
}