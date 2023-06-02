import { getRandomTripPointsList } from '../mock/trip-points-list-mock';
import { getRandomOffers } from '../mock/offer-mock';
import { getRandomDestination } from '../mock/destination-mock';

// What that should do?

const tripPointsListModel = getRandomTripPointsList();
const offersListModel = getRandomOffers();

const getRandomDestinationsList = () => {
  const destinationsList = [];
  for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
    destinationsList.push(getRandomDestination());
  }

  return destinationsList;
};
const destinationsListModel = getRandomDestinationsList();

export { tripPointsListModel, offersListModel, destinationsListModel };
