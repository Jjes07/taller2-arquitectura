const pokeneas = require("../data/pokeneas");

const getRandomPokenea = () => {
  const index = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[index];
};

const getAllPokeneas = () => {
  return pokeneas;
};

module.exports = { getRandomPokenea, getAllPokeneas };

