const PubSub = require('../helpers/pub_sub.js');

const BeerListView = function(container){
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (event) => {
    const data = event.detail;
    console.log('Subscribed data:', data);
  })
};


module.exports = BeerListView;
