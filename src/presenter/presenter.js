import CreationFormElement from '../view/creation-form.js';
import EditFormElement from '../view/edit-form.js';
import SortingElement from '../view/sorting.js';
import TripPointElement from '../view/trip-point.js';
import TripPointsListElement from '../view/trip-points-list.js';
import { render } from '../render.js';
import { tripPointsListModel} from '../model/model.js';


export default class Presenter {
  tripPointsListElement = new TripPointsListElement();
  points = tripPointsListModel;

  constructor({container}) {
    this.container = container;
  }

  init() {
    // Get random data from model

    render(new SortingElement(), this.container);
    render(this.tripPointsListElement, this.container);

    render(new CreationFormElement(this.points[0]), this.tripPointsListElement.getElement());
    render(new TripPointElement(this.points[0]), this.tripPointsListElement.getElement());
    render(new EditFormElement(this.points[0]), this.tripPointsListElement.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new TripPointElement(this.points[i]), this.tripPointsListElement.getElement());
    }

  }
}
