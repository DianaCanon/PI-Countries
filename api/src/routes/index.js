const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoute = require("./country.route.js");
const activitiesRoute = require("./activity.route.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRoute);
router.use("/activities", activitiesRoute);

module.exports = router;
