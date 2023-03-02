const {
  consultCountries,
  dbCountriesByName,
  getCountryById,
  createDbCountries,
} = require("../controller/countryController");

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const copyDb = await createDbCountries();
    const result = await consultCountries();
    if (!name) {
      return res.status(200).send(result);
    } else {
      const resultName = await dbCountriesByName(name);
      !resultName.length
        ? res.status(404).send(`No se encontraron paises que contengan ${name}`)
        : res.send(resultName);
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getCountryId = async (req, res) => {
  const { idPais } = req.params;

  if (typeof idPais !== "string" || idPais.length !== 3)
    return res.status(404).send("El código del país debe ser 3 letras");

  try {
    const foundCountry = await getCountryById(idPais.toUpperCase());
    if (!foundCountry) res.status(404).send("Codigo de país no encontrado");
    else res.send(foundCountry);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getCountriesHandler, getCountryId };
