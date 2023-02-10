const { Router } = require("express");
const router = Router();
const {
  getCountriesHandler,
  getCountryId,
} = require("../handlers/countryHandler");

router.get("/", getCountriesHandler);

router.get("/:idPais", getCountryId);

module.exports = router;
