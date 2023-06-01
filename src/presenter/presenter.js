import CreationFormElement from '../view/creation-form.js';
import EditFormElement from '../view/edit-form.js';
import SortingElement from '../view/sorting.js';
import TripPointElement from '../view/trip-point.js';
import TripPointsListElement from '../view/trip-points-list.js';
import { render } from '../render.js';


export default class Presenter {
  tripPointsListElement = new TripPointsListElement();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new SortingElement(), this.container);
    render(this.tripPointsListElement, this.container);

    render(new CreationFormElement(), this.tripPointsListElement.getElement());
    render(new TripPointElement(), this.tripPointsListElement.getElement());
    render(new EditFormElement(), this.tripPointsListElement.getElement());

    for (let i = 0; i < 10; i++) {
      render(new TripPointElement(), this.tripPointsListElement.getElement());
    }

  }
}
