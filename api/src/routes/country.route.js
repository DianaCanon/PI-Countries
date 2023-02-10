const { Router } = require("express");
const router = Router();
const {
  getCountriesHandler,
  getCountryId, postContriesHandler
} = require("../handlers/countryHandler");

router.post("/", postContriesHandler)

router.get("/", getCountriesHandler);

router.get("/:idPais", getCountryId);

module.exports = router;
