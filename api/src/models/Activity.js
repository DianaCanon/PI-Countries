const {DataTypes, Sequelize} = require("sequelize");

module.exports = sequelize => {
    sequelize.define('Activity', {
        idActivity:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'act_country'
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        }, 
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM(["Verano", "Otoño", "Invierno", "Primavera"]),
            allowNull: false
        },
        
        
    }, {timestamps: false})
}