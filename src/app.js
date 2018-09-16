const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const beerLisView = new BeerListView;
  beerLisView.bindEvents();

  const beers = new Beers;
  beers.getData();
})
