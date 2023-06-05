function generateRandomTripPoint(destinations, offersByType) {
  const basePrice = Math.floor(Math.random() * 1000) + 500; // Генерируем случайную базовую цену от 500 до 1500
  const dateFrom = new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(); // Используем текущую дату и время как начальную дату
  const dateTo = new Date(Date.parse(dateFrom) + Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(); // Используем дату через 1 день от текущего момента как конечную дату
  const destinationId = destinations[Math.floor(Math.random() * destinations.length)].id; // Выбираем случайный идентификатор пункта назначения
  const id = Math.floor(Math.random() * 1000); // Генерируем случайный идентификатор от 0 до 999
  const type = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'][Math.floor(Math.random() * 9)]; // Выбираем случайный тип из списка
  const typeOffers = offersByType.filter((offerByType) => offerByType.type === type); // Фильтруем офферы по выбранному типу и получаем массив идентификаторов
  let offers = typeOffers[0].offers;
  offers = offers.map((offer) => offer.id);
  const subsetSize = Math.floor(Math.random() * (offers.length + 1));
  const shuffledOffers = offers.sort(() => Math.random() - 0.5);
  const subset = shuffledOffers.slice(0, subsetSize);
  subset.sort((a, b) => a - b);

  const tripPoint = {
    basePrice: basePrice,
    dateFrom: dateFrom,
    dateTo: dateTo,
    destination: destinationId,
    id: id,
    offers: subset,
    type: type
  };

  return tripPoint;
}

function generateRandomTripPoints(destinations, offersByType) {
  const numTripPoints = Math.floor(Math.random() * 7) + 1;
  const tripPoints = [];
  const generatedIds = [];

  while (tripPoints.length < numTripPoints) {
    const tripPoint = generateRandomTripPoint(destinations, offersByType);
    if (!generatedIds.includes(tripPoint.id)) {
      generatedIds.push(tripPoint.id);
      tripPoints.push(tripPoint);
    }
  }

  return tripPoints.sort((a, b) => a.id - b.id);
}

export { generateRandomTripPoints };
