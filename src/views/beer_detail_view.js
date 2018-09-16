const BeerDetailView = function(){

};

BeerDetailView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

  const name = document.createElement('h2');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  return beerDetail;
};


module.exports = BeerDetailView;
