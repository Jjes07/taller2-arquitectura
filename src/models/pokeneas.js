const pokeneas = [
  {
    id: 1,
    name: "Pikachu Etapa 1",
    height: 2.0,
    ability: "Baila morena, baila morena",
    image: "https://storage.googleapis.com/pokeneas_7_bucket/pikabaile.jpg",
    quote: "Bailemos la macarena"
  },
  {
    id: 2,
    name: "Pikachu Etapa 2",
    height: 2.5,
    ability: "Mirar el horizonte",
    image: "https://storage.googleapis.com/pokeneas_7_bucket/pikabola.jpg",
    quote: "¡Mira el horizonte!"
  },
  {
    id: 3,
    name: "Pikachu Etapa 3",
    height: 3.0,
    ability: "Comprar porros",
    image: "https://storage.googleapis.com/pokeneas_7_bucket/pikaburundanga.jpg",
    quote: "Ya se paso el efecto"
  },
  {
    id: 4,
    name: "Pikachu Etapa 4",
    height: 3.5,
    ability: "Mirar tu alma",
    image: "https://storage.googleapis.com/pokeneas_7_bucket/pikachino.jpg",
    quote: "Miro tus pecados"
  },
  {
    id: 5,
    name: "Pikachu Etapa 5",
    height: 4.0,
    ability: "Ser normal",
    image: "https://storage.googleapis.com/pokeneas_7_bucket/pikachu.jpg",
    quote: "Que tengas un gran día"
  },
  {
    id: 6,
    name: "Pikachu Etapa 6",
    height: 4.5,
    ability: "Aguantar el dolor",
    image: "https://storage.googleapis.com/pokeneas_7_bucket/pikaportugues.jpg",
    quote: "Quero um cafe"
  },
  {
    id: 7,
    name: "Pikachu Etapa 7",
    height: 5.0,
    ability: "Mirar dos lados al mismo tiempo",
    image: "https://storage.googleapis.com/pokeneas_7_bucket/pikavisco.jpg",
    quote: "Puedo mirar a la izquierda y a la derecha al mismo tiempo"
  },
];

const getRandomPokenea = () => {
  const index = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[index];
};

module.exports = { pokeneas, getRandomPokenea };