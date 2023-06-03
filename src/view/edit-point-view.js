import AbstractView from '../framework/view/abstract-view.js';
import { humanizePointEditorDueDate } from '../utils.js';

function createTripPointTemplate(tripPoint, allDestinations, allOffers) {
  const basePrice = tripPoint.basePrice;
  const dateFrom = tripPoint.dateFrom;
  const dateTo = tripPoint.dateTo;
  const destinationId = tripPoint.destination;
  const id = tripPoint.id;
  const selectedOffers = tripPoint.offers;
  const type = tripPoint.type;
  const destinations = allDestinations;
  const offers = allOffers;
  const possibleOffers = offers.filter((i) => i.type === type)[0].offers;
  let possibleOffersHtml = '';
  if (possibleOffers.length > 0) {
    possibleOffersHtml += (`
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
    `);
    possibleOffers.forEach((i) => {
      possibleOffersHtml += (`
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${i.title.replace(/\s/g, '')}-${i.id}" type="checkbox" name="event-offer-${i.title.replace(/\s/g, '')}" ${selectedOffers.includes(i.id) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${i.title.replace(/\s/g, '')}-${i.id}">
          <span class="event__offer-title">${i.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${i.price}</span>
        </label>
      </div>
      `);
    });
    possibleOffersHtml += (`
      </div>
    `);
  }

  let possibleDestinationsHtml = '';
  const possibleDestinations = destinations.map((i) => i.name);
  possibleDestinations.sort();
  possibleDestinations.forEach((i) => {
    possibleDestinationsHtml += (`
      <option value="${i}"></option>
    `);
  });

  const destinationDescription = (`
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${destinations.filter((i) => i.id === destinationId)[0].description}</p>
  `);

  const template = (`
<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${'taxi' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-${id}">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${'bus' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-${id}">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${'train' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--train" for="event-type-train-${id}">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${'ship' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-${id}">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${'drive' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-${id}">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${'flight' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-${id}">Flight</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-check-in-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${'check-in' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-${id}">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${'sightseeing' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-${id}">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${'restaurant' === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-${id}">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${id}">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${destinations.filter((i) => i.id === destinationId)[0].name}" list="destination-list-${id}">
        <datalist id="destination-list-${id}">
          ${possibleDestinationsHtml}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-${id}">From</label>
        <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${humanizePointEditorDueDate(dateFrom)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-${id}">To</label>
        <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${humanizePointEditorDueDate(dateTo)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-${id}">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
        <section class="event__section  event__section--offers">
          ${possibleOffersHtml}
        </section>
        <section class="event__section  event__section--destination">
          ${destinationDescription}
        </section>
    </section>
  </form>
</li>
  `);

  return template;
}

export default class EditPointView extends AbstractView {
  #tripPoint = null;
  #destinations = null;
  #offers = null;

  constructor(tripPoint, destinations, offers) {
    super();
    this.#tripPoint = tripPoint;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createTripPointTemplate(this.#tripPoint, this.#destinations, this.#offers);
  }

  updateOffersDueTypeUpdate(newType) {
    const id = this.#tripPoint.id;
    const selectedOffers = this.#tripPoint.offers;
    const type = newType;
    const offers = this.#offers;
    const possibleOffers = offers.filter((i) => i.type === type)[0].offers;
    let possibleOffersHtml = '';
    if (possibleOffers.length > 0) {
      possibleOffersHtml += (`
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
      `);
      possibleOffers.forEach((i) => {
        possibleOffersHtml += (`
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${i.title.replace(/\s/g, '')}-${i.id}" type="checkbox" name="event-offer-${i.title.replace(/\s/g, '')}" ${selectedOffers.includes(i.id) ? 'checked' : ''}>
          <label class="event__offer-label" for="event-offer-${i.title.replace(/\s/g, '')}-${i.id}">
            <span class="event__offer-title">${i.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${i.price}</span>
          </label>
        </div>
        `);
      });
      possibleOffersHtml += (`
        </div>
      `);
    }
    return possibleOffersHtml;
  }

  updateDestinationDescription(destinationName) {
    if (this.#destinations.map((i) => i.name).includes(destinationName)) {
      return (`
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${this.#destinations.filter((i) => i.name === destinationName)[0].description}</p>
      `);
    } else {
      return '';
    }
  }

  getDataToUpdatePoint() {
    const from = this.element;
    const basePrice = from.querySelector('.event__input--price').value.replace(/\s/g, '');
    const dateFrom = new Date(from.querySelectorAll('.event__input--time')[0].value).toISOString();
    const dateTo = new Date(from.querySelectorAll('.event__input--time')[1].value).toISOString();
    const type = from.querySelector('.event__type-output').textContent.replace(/\s/g, '');
    let destinationId;
    if (this.#destinations.includes(from.querySelector('.event__input--destination').value)) {
      destinationId = from.querySelector('.event__input--destination').value;
    } else {
      destinationId = -1;
    }
    const id = this.#tripPoint.id;

    const offers = this.#offers.filter((i) => i.type === type)[0].offers;
    console.log(offers);
  }
}
