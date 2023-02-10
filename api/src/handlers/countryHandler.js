const {
  dbCountry,
  dbCountriesByName,
  getCountryById,
} = require("../controller/countryController");

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const result = await dbCountry();
    if (!name) {
      return res.send(result);
    } else {
      const resultName = await dbCountriesByName(name);
        console.log(resultName);
      !resultName.length
        ? res
            .status(404)
            .send({ msg: `No se encontraron paises que contengan ${name}`})
        : res.send(resultName);
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getCountryId = async (req, res) => {
  const { idPais } = req.params;

  (typeof idPais !== "string" || idPais.length !== 3) &&
    res.status(404).send("El código del país debe ser 3 letras");

  try {
    const result = await dbCountry();
    const foundCountry = await getCountryById(idPais);
    if (!foundCountry)
      return res.status(404).send("Codigo de país no encontrado");
    else return res.send(foundCountry);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getCountriesHandler, getCountryId };
