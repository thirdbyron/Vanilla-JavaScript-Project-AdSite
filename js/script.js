import { renderAdList } from './render-ad-card.js';
import { adaptDataToClient } from './adapt-data.js';

var mySlider = new rSlider({
  target: '#sampleSlider',
  values: [10000, 1000000],
  range: true,
  tooltip: true,
  scale: true,
  labels: false,
  step: 10000
});




const initApp = (productsData) => {
  const products = adaptDataToClient(productsData);
  renderAdList(products)
}


const getData = () => {
  fetch('https://main-shop-fake-server.herokuapp.com/db')
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error();
  })
  .then((data) => data.products)
  .then((productsData) => {
    initApp(productsData);
  })
  .catch((err) => {
    console.log(err)
  })
}

getData();