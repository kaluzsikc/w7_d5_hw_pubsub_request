const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#beer-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const beerListContainer = document.querySelector('#beer-list');
  const beerLisView = new BeerListView(beerListContainer);
  beerLisView.bindEvents();

  const beers = new Beers;
  beers.bindEvents();
  beers.getData();
});
