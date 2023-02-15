const {DataTypes, Sequelize} = require("sequelize");

module.exports = sequelize => {
    sequelize.define('Activity', {
        idActivity:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            },
            defaultValue: 3,
        }, 
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            get() {
                const durationValue = this.getDataValue("duration")
                return !durationValue ? durationValue : `${durationValue} hora(s)`
            }
        },
        season: {
            type: DataTypes.ENUM(["Verano", "Otoño", "Invierno", "Primavera"]),
            allowNull: false
        },
        
        
    }, {timestamps: false})
}