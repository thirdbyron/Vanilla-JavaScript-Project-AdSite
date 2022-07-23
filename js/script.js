'use strict'

import { renderProductList } from './render-product-list.js';
import { adaptDataToClient } from './adapt-data.js';
import { getData } from './api.js';

var mySlider = new rSlider({
  target: '#sampleSlider',
  values: [10000, 1000000],
  range: true,
  tooltip: true,
  scale: true,
  labels: false,
  step: 10000
});

const initApp = () => {
  getData((data) => {
    const products = adaptDataToClient(data);
    renderProductList(products)
  })
}

initApp();