import TripPointListView from '../view/trip-point-list-view';
import TripPointPresenter from './trip-point-presenter.js';
import { render } from '../framework/render.js';


export default class PagePresenter {
  #pageContainer = null;
  #tripPointListContainer = null;

  constructor(pageContainer) {
    this.#pageContainer = pageContainer;
    this.#tripPointListContainer = new TripPointListView();
    render(this.#tripPointListContainer, this.#pageContainer);
  }

  renderPoint(tripPointListContainer, tripPoint, destinations, offers) {
    const tripPointPresenter = new TripPointPresenter(tripPointListContainer);
    tripPointPresenter.init(tripPoint, destinations, offers);
  }

  init(tripPointList, destinations, offers) {
    tripPointList.forEach((tripPoint) => {
      this.renderPoint(this.#tripPointListContainer, tripPoint, destinations, offers);
    });
  }
}
