import TripPointListView from '../view/trip-point-list-view';
import TripPointPresenter from './trip-point-presenter.js';
import { render } from '../framework/render.js';
import CreatePointPresenter from './create-point-presenter';
import FilterPresenter from './filter-presenter';
import SortPresenter from './sort-presenter';

const listOfPointPresenters = [];
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
    const createPointPresenter = new CreatePointPresenter(this.#tripPointListContainer);
    const sortPresenter = new SortPresenter(this.#pageContainer);
    this.#pageContainer.parentNode.parentNode.parentNode.querySelector('.trip-main__event-add-btn').addEventListener('click', () => {
      listOfPointPresenters.forEach((i) => {
        i.closeEditor();
      });
      createPointPresenter.init(destinations, offers, tripPointList, sortPresenter);
    });

    sortPresenter.init();

    tripPointList.forEach((tripPoint) => {
      this.renderPoint(this.#tripPointListContainer, tripPoint, destinations, offers);
    });
    const filterPresenter = new FilterPresenter(this.#pageContainer.parentNode.parentNode.parentNode.querySelector('.trip-controls__filters'));
    filterPresenter.init();

    sortPresenter.goToDaySort();

    document.querySelectorAll('.trip-filters__filter').forEach((i) => {
      i.addEventListener('click', () => {
        sortPresenter.goToDaySort();
      });
    });
  }
}

export { listOfPointPresenters };
