const BeerDetailView = function(){

};

BeerDetailView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const tagline = document.createElement('p');
  tagline.textContent = beer.tagline;
  beerDetail.appendChild(tagline);

  const abv = document.createElement('p');
  abv.textContent = `Abv: ${beer.abv}`;
  beerDetail.appendChild(abv);

  const description = document.createElement('p');
  description.textContent = `Description: ${beer.description}`;
  beerDetail.appendChild(description);

  const food_pairing = document.createElement('p');
  food_pairing.textContent = `Food Pairing: ${beer.food_pairing}`;
  beerDetail.appendChild(food_pairing);

  const first_brewed = document.createElement('p');
  first_brewed.textContent = `First Brewed: ${beer.first_brewed}`;
  beerDetail.appendChild(first_brewed);

  // const ingredients = document.createElement('p');
  // ingredients.textContent = `Ingredients: ${beer.ingredients}`;
  // console.log(beer.ingredients);
  // beerDetail.appendChild(ingredients);

  return beerDetail;
};


module.exports = BeerDetailView;
