const { Router } = require("express");
const router = Router();
const axios = require("axios");


router.post("/", (req, res) => {
  const {Nombre, Dificultad, Duración} = req.body;

  
  
})


router.get("/", async (req, res) => {
  const result = await axios.get("https://restcountries.com/v3.1/all");
  try {
    res.send(result.data);
  } catch (error) {
    res.status(404).send("Fallo");
  }
});

module.exports = router;
