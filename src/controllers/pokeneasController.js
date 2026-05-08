const os = require('os');
const pokeneas = require('../data/pokeneas');

const getRandomPokenea = () => {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[randomIndex];
};

const getApiPokenea = (req, res) => {
  const pokenea = getRandomPokenea();
  res.json({
    id: pokenea.id,
    name: pokenea.name,
    height: pokenea.height,
    ability: pokenea.ability,
    container: os.hostname()
  });
};

const getViewPokenea = (req, res) => {
  const pokenea = getRandomPokenea();
  res.render('pokenea', {
    name: pokenea.name,
    image: pokenea.image,
    quote: pokenea.quote,
    container: os.hostname()
  });
};

module.exports = { getApiPokenea, getViewPokenea };