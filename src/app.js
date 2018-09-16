const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const beerListContainer = document.querySelector('#beer-list');
  const beerLisView = new BeerListView(beerListContainer);
  beerLisView.bindEvents();

  const beers = new Beers();
  beers.getData();
})
