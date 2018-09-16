const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('./beer_detail_view.js');

const BeerListView = function(container){
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (e) => {
    this.clearList();
    this.renderBeerDetailViews(e.detail);
    // const data = event.detail;
    // console.log('Subscribed data:', data);
    // this.populate(data);
  })
};

BeerListView.prototype.clearList = function () {
  this.container.innerHTML='';
};

BeerListView.prototype.renderBeerDetailViews = function (beers) {
  beers.forEach((beer) => {
    const beerItem = this.createBeerListItem(beer);
    this.container.appendChild(beerItem)
  })
};

BeerListView.prototype.createBeerListItem = function (beer) {
  const beerDetailView = new BeerDetailView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  return beerDetail;
};

// BeerListView.prototype.populate = function (data) {
//   const dropdown = document.querySelector('#beer-select');
//   data.forEach((beer, index) => {
//
//     const option = document.createElement('option');
//     option.textContent = beer.name;
//
//     console.log(beer.name);
//     dropdown.appendChild(option)
//     option.value = index;
//   })
// };

module.exports = BeerListView;
