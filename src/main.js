import { generateRandomDestinations } from './mock/destination-mock';
import { generateRandomList } from './mock/offer-mock';
import { generateRandomTripPoints } from './mock/trip-point-mock';
import PagePresenter from './presenter/page-presenter';


const pageContainer = document.querySelector('.trip-events');
const destinations = generateRandomDestinations();
const offers = generateRandomList();
const tripPoints = generateRandomTripPoints(destinations, offers);

const pagePresenter = new PagePresenter(pageContainer);
pagePresenter.init(tripPoints, destinations, offers);

