const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement){
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:name-list', (evt) => {
    const nameList = evt.detail;
    this.populateSelect(nameList);
    // console.log('name list',evt.detail);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selected = evt.target.value;
    PubSub.publish('SelectView:change', selected);
  })
};

SelectView.prototype.populateSelect = function (names) {
  names.forEach((name, index) => {
    const option = this.createNameOption(name, index);
    console.log('Select Beers',option);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createNameOption = function (name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
};



module.exports = SelectView;
