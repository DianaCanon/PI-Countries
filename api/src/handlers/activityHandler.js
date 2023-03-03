const {
  createActivity,
  findActivities,
  modifyCountry,
} = require("../controller/activityController");

const postActHandler = async (req, res) => {
  const { name, difficulty, duration, season, idCountry } = req.body;

  try {
    if (!req.body) throw new Error("diligenciar los datos");

    if (!name) throw new Error("Nombre de la Actividad es un dato obligatorio");
    if (!difficulty)
      throw new Error("Dificultad de la Actividad es un dato obligatorio");
    if (!duration)
      throw new Error("Duración de la Actividad es un dato obligatorio");
    if (!season) throw new Error("Temporada es un dato obligatorio");
    if (!idCountry) throw new Error("Id del País es un dato obligatorio");

    const newActivTour = await createActivity(
      name,
      difficulty,
      duration,
      season,
      idCountry
    );
    res.send("Actividad creada exitosamente");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getActHandler = async (req, res) => {
  try {
    const dbActivities = await findActivities();
    res.send(dbActivities);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const putCountryForActivityHandler = async (req, res) => {
  const { idActivity, idsCountries } = req.body;
  try {
    const updatedCountryInActivity = await modifyCountry({
      idActivity,
      idsCountries,
    });
    if (!updatedCountryInActivity.length)
      res.status(404).send("la actividad no fue actualizada");
    res.status(201).send(updatedCountryInActivity);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  postActHandler,
  getActHandler,
  putCountryForActivityHandler,
};
