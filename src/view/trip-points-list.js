import {createElement} from '../render.js';

const createTripPointsListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class TripPointsListElement {
  getTemplate() {
    return createTripPointsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
