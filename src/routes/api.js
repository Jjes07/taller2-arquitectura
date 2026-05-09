const express = require("express");
const router = express.Router();
const os = require("os");
const { getRandomPokenea } = require("../controllers/pokeneasController");

router.get("/", (req, res) => {
  const pokenea = getRandomPokenea();
  res.json({
    id: pokenea.id,
    name: pokenea.name,
    height: pokenea.height,
    ability: pokenea.ability,
    containerId: os.hostname(),
  });
});

module.exports = router;