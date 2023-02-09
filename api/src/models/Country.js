const { DataTypes, DATE } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      IdCountry: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Imagen_bandera: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Capital: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "no se encontraron datos",
      },
      Subregión: {
        type: DataTypes.STRING,
      },
      Área: {
        type: DataTypes.FLOAT,
      },
      Población: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
