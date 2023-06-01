import { getRandomCity, getRandomId, getRandomPic, getRandomDescription } from '../utils.js';

const getRandomDestination = () => {
  const numPictures = Math.floor(Math.random() * 5) + 1;
  const pictures = [];

  for (let i = 0; i < numPictures; i++) {
    pictures.push({
      src: getRandomPic(),
      description: getRandomDescription()
    });
  }

  return {
    id: getRandomId(),
    description: getRandomDescription(),
    name: getRandomCity(),
    pictures: pictures
  };
};

export { getRandomDestination };
