const { Router } = require("express");
const { Country, Activity } = require("../db");

const router = Router();
const axios = require("axios");
const { dbCountry } = require("../controller/activityController");

/* router.post("/", async (req, res) => {
  const result = await axios.get("https://restcountries.com/v3/all");
  const arrayDatos = result.data;

  if (!arrayDatos.length) return res.status(404).send("datos no encontrados");
  else {
    try {
      arrayDatos.forEach(async (c) => {
        const idRepetido = await Country.findByPk(c.cca3);
        if (idRepetido === null) {
          let objCountry = {};
          objCountry.IdCountry = c.cca3;
          objCountry.Nombre = c.name.common;
          objCountry.Imagen_bandera = c.flags[1];
          objCountry.Capital = c.capital
            ? c.capital[0]
            : "Capital no encontrada";
          objCountry.Subregión = c.subregion;
          objCountry.Área = c.area;
          objCountry.Población = c.population;

          const countries = await Country.create(objCountry);
        }
      });
      return res.send("datos agregados exitosamente");
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
}); */

router.get("/", async (req, res) => {
  const result = await dbCountry();
  const bdCountries = await Country.findAll();

  try {
    res.send(bdCountries );
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

//OJO FALTA UNIR LAS ACTIVIDADES

router.get("/:idPais", async (req, res) => {
  const { idPais } = req.params;

  if (typeof idPais !== "string" || idPais.length !== 3)
    return res.status(404).send("El código del país debe ser 3 letras");

  const foundCountry = await Country.findByPk(idPais);
  if (!foundCountry)
    return res.status(404).send("Codigo de país no encontrado");

  try {
    return res.send(foundCountry);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  const result = await axios.get("https://restcountries.com/v3/alpha/{code}");
});

module.exports = router;
