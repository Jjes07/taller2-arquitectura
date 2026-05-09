const express = require("express");
const router = express.Router();
const os = require("os");
const { getRandomPokenea } = require("../controllers/pokeneasController");

router.get("/", (req, res) => {
  const pokenea = getRandomPokenea();
  const containerId = os.hostname();

  res.render("pokenea", { pokenea, containerId });
});

module.exports = router;