import FiltersElement from './view/filters.js';
import {render} from './render.js';
import Presenter from './presenter/presenter.js';


const main = document.querySelector('.page-body__page-main');
const pageContainer = main.querySelector('.trip-events');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const presenter = new Presenter({container: pageContainer});

render(new FiltersElement(), siteFilterElement);

presenter.init();
