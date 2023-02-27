const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const clearData = (data) => {
  return data.map((c) => {
    return {
      IdCountry: c.cca3,
      name: c.name.common,
      img_flag: c.flags[1],
      continent: c.continents[0],
      capital: c.capital ? c.capital[0] : "Capital no encontrada",
      subregion: c.subregion,
      area: c.area,
      population: c.population,
    };
  });
};

const createDbCountries = async () => {
  const dbCountries = await Country.findAll();
  if (dbCountries.length > 0) return dbCountries;
  else {
    const result = (await axios.get("https://restcountries.com/v3/all")).data;
    const dataclean = clearData(result);
    await Country.bulkCreate(dataclean);
    return await Country.findAll();
  }
};

const consultCountries = async () => {
  return await Country.findAll({
    include: [{ model: Activity, through: { attributes: [] } }],
  });
};

const getCountryById = async (id) => {
  return await Country.findByPk(id, {
    include: [
      {
        model: Activity,
        /* attributes: ["name", "difficulty","duration","season"], */
        through: { attributes: [] }, // para manejar la visualizacion de la tabla intermedia
      },
    ],
  });
};

const dbCountriesByName = async (name) => {
  const findName = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return findName;
};

module.exports = {
  createDbCountries,
  consultCountries,
  dbCountriesByName,
  getCountryById,
};
