import { getRandomArrayElement, getRandomDate, getRandomId, getRandomPrice } from '../utils';
import { getRandomDestination } from './destination-mock';
import { getRandomOffers } from './offer-mock';
import { POINT_TYPES } from './const';

const getRandomTripPoint = () => ({
  basePrice: getRandomPrice(),
  dateFrom: getRandomDate(),
  dateTo: getRandomDate(),
  destination: getRandomDestination(),
  id: getRandomId(),
  offers: getRandomOffers(),
  type: getRandomArrayElement(POINT_TYPES)
});


export { getRandomTripPoint };
