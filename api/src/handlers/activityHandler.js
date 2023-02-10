const {
  createActivity,
  findActivities,
} = require("../controller/activityController");

const postActHandler = async (req, res) => {
  const { name, difficulty, duration, season, idCountry } = req.body;

  try {
    if (!req.body) throw new Error("diligenciar los datos");

    if (!name || !difficulty || !duration || !season || !idCountry)
      throw new Error("faltan datos obligatorios");
      
    const newActivTour = await createActivity(
      name,
      difficulty,
      duration,
      season,
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
