const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Beers = function(){

  this.beers = [];

};


Beers.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers')
  requestHelper.get((data) => {
    PubSub.publish('Beers:beers-ready', data);
    // console.log('Data to be published:', data);
  });
}


module.exports = Beers;
