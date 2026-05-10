const pokeneas = require("../data/pokeneas");

const getRandomPokenea = () => {
  const index = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[index];
};

const getApiPokenea = (req, res) => {
  const pokenea = getRandomPokenea();
  
  apiData = {
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

  viewData = {
    name: pokenea.name,
    image: pokenea.image,
    quote: pokenea.quote,
    container: os.hostname()
  };

  res.render('pokenea', viewData);
};

module.exports = { getRandomPokenea, getAllPokeneas };

