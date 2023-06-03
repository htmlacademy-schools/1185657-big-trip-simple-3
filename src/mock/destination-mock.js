const loremIpsumSentences = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

function generateRandomDestination() {
  const id = Math.floor(Math.random() * 1000) + 1;
  const descriptionSentencesCount = Math.floor(Math.random() * 3) + 1;
  const descriptionSentences = [];

  for (let i = 0; i < descriptionSentencesCount; i++) {
    const randomIndex = Math.floor(Math.random() * loremIpsumSentences.length);
    descriptionSentences.push(loremIpsumSentences[randomIndex]);
  }

  const description = descriptionSentences.join(' ');

  const names = ['Chamonix', 'Bali', 'Rome', 'Moscow', 'Saint-Petersburg', 'Washington'];
  const name = names[Math.floor(Math.random() * names.length)];

  const numPictures = Math.floor(Math.random() * 5) + 1;
  const pictures = [];

  for (let i = 0; i < numPictures; i++) {
    const randomNum = Math.random();
    const picture = {
      src: `http://picsum.photos/300/200?r=${randomNum}`,
      description: `${name} picture ${i + 1}`
    };
    pictures.push(picture);
  }

  const destination = {
    id: id,
    description: description,
    name: name,
    pictures: pictures
  };

  return destination;
}

function generateRandomDestinations() {
  const numDestinations = Math.floor(Math.random() * 7) + 1;
  const destinations = [];
  const generatedIds = [];

  while (destinations.length < numDestinations) {
    const destination = generateRandomDestination();
    if (!generatedIds.includes(destination.id)) {
      generatedIds.push(destination.id);
      destinations.push(destination);
    }
  }

  return destinations.sort((a, b) => a.id - b.id);
}

export { generateRandomDestinations };
