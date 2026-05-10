const os = require("os");
const pokeneas = require("../models/pokeneas");
const { getRandomPokenea } = require("../models/pokeneas");
const { name } = require("ejs");

const getApiPokenea = (req, res) => {
  const pokenea = getRandomPokenea();

  const apiData = {
    id: pokenea.id,
    name: pokenea.name,
    height: pokenea.height,
    ability: pokenea.ability,
    container: os.hostname()
  };

  res.json(apiData);
};

const getViewPokenea = (req, res) => {
  const pokenea = getRandomPokenea();

  const viewData = {
    name: pokenea.name,
    image: pokenea.image,
    quote: pokenea.quote,
    containerId: os.hostname()
  };

  res.render("pokenea", viewData);
};

module.exports = { getApiPokenea, getViewPokenea };