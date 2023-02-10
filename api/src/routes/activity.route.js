const { Router } = require("express");
const router = Router();

const {
  postActHandler,
  getActHandler,
} = require("../handlers/activityHandler.js");

router.post("/", postActHandler);

router.get("/", getActHandler);

module.exports = router;
