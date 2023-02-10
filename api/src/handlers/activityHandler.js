const {
  createActivity,
  findActivities,
} = require("../controller/activityController");
const { Activity } = require("../db.js");

const postActHandler = async (req, res) => {
  const { nombre, dificultad, duracion, temporada, idCountry } = req.body;

  if (!req.body) throw new Error("diligenciar los datos");

  if (!nombre || !dificultad || !duracion || !temporada || !idCountry)
    throw new Error("faltan datos obligatorios");

  try {
    const newActivTour = await createActivity(
      nombre,
      dificultad,
      duracion,
      temporada,
      idCountry
    );
    res.send(newActivTour);
  } catch (error) {
    res.status(404).send({ error: error.message });
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

module.exports = { postActHandler, getActHandler };
