const { DataTypes, DATE } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      IdCountry: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img_flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,        
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "no se encontraron datos",
      },
      subregion: {
        type: DataTypes.STRING,
        defaultValue: "no registra"
      },
      area: {
        type: DataTypes.FLOAT,
        get() {
          const areaValue = this.getDataValue("area");
          return !areaValue ? areaValue : `${areaValue} km2`;
        },
      },
      population: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
