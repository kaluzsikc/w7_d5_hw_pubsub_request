const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Beers = function(){
  this.beersData = [];
  this.names = [];
};

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt)  => {
    const beerIndex = evt.detail;
    console.log('beerIndex:', beerIndex);
    this.publishBeersByName(beerIndex);
  })
};

Beers.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers')
  requestHelper.get((data) => {
    PubSub.publish('Beers:beers-ready', data);
    // console.log('Data to be published:', data);
    this.publishNames(data);
  });
}

Beers.prototype.publishNames = function (data) {
  this.beersData = data;
  this.names = this.uniqueNameList();
  PubSub.publish('Beers:name-list', this.names);
};

Beers.prototype.beerList = function () {
  const fullList = this.beersData.map( beer => beer.name);
  console.log('fullList:', fullList);
  return fullList;
};

Beers.prototype.uniqueNameList = function () {
  return this.beerList().filter((beer, index, array) => {
    return array.indexOf(beer) === index;
  });
};

Beers.prototype.beersByName = function (beerIndex) {
  const selectedName = this.names[beerIndex];
  console.log('selectedName:',selectedName);
  return this.beersData.filter((beer) => {
    return beer.name === selectedName;
  });
};

Beers.prototype.publishBeersByName = function (beerIndex) {
  const foundBeers = this.beersByName(beerIndex);
  console.log('foundBeers:', foundBeers);
  PubSub.publish('Beers:beers-ready', foundBeers);
};

module.exports = Beers;
