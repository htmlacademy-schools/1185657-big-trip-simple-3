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

    const changeEditMode = (elementToHide, elementToShow) => {
      this.tripPointsListElement.element.replaceChild(elementToShow, elementToHide);
    };

    render(new SortingElement(), this.container);
    render(this.tripPointsListElement, this.container);

    for (let i = 0; i < this.points.length; i++) {
      const pointElement = new TripPointElement(this.points[i]);
      const editElement = new EditFormElement(this.points[i]);
      pointElement.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
        if (this.tripPointsListElement.element.querySelectorAll('.event--edit').length === 0) {
          changeEditMode(pointElement.getElement(), editElement.getElement());
        }
      });
      editElement.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
        changeEditMode(editElement.getElement(), pointElement.getElement());
      });

      editElement.getElement().querySelector('.event--edit').addEventListener('submit', (evt) => {
        evt.preventDefault();
        changeEditMode(editElement.getElement(), pointElement.getElement());
      });

      editElement.getElement().querySelector('.event--edit').addEventListener('reset', (evt) => {
        evt.preventDefault();
        this.tripPointsListElement.element.removeChild(editElement.getElement());
        editElement.removeElement();
        pointElement.removeElement();
      });

      render(pointElement, this.tripPointsListElement.getElement());
    }

  }
}
