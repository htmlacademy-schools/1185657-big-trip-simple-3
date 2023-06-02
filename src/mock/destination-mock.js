import { getRandomCity, getRandomId, getRandomPic, getRandomDescription } from '../utils.js';

const getRandomDestination = () => {
  const numPictures = Math.floor(Math.random() * 5) + 1;
  const pictures = [];

  let desc = getRandomDescription();
  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++){
    desc += ` ${getRandomDescription()}`;
  }

  for (let i = 0; i < numPictures; i++) {
    pictures.push({
      src: getRandomPic(),
      description: desc
    });
  }

  return {
    id: getRandomId(),
    description: desc,
    name: getRandomCity(),
    pictures: pictures
  };
};

export { getRandomDestination };
