const { Router } = require("express");
const router = Router();

const {
  postActHandler,
  getActHandler,
  putCountryForActivityHandler,
} = require("../handlers/activityHandler.js");

router.post("/", postActHandler);

router.get("/", getActHandler);

router.put("/", putCountryForActivityHandler);

module.exports = router;
