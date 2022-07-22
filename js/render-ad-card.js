import { activatePopups } from './activate-popup.js';
import { deleteUnusableElements } from './utils/dom-operations.js';

export const renderAdCard = (product) => {
  return `<li class="products__item product">
  <button class="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  </button>
  <div class="product__image">
    <div class="product__image-more-photo hidden">+2 фото</div>
    <img src="${product.photos[0]}" srcset="${product.photos[0]} 2x" width="318" height="220" alt="${product.name}">
    <div class="product__image-navigation">
      <span class="product__navigation-item product__navigation-item--active"></span>
      <span class="product__navigation-item"></span>
      <span class="product__navigation-item"></span>
      <span class="product__navigation-item"></span>
      <span class="product__navigation-item"></span>
    </div>
  </div>
  <div class="product__content">
    <h3 class="product__title">
      <a href="#">${product.name}</a>
    </h3>
    <div class="product__price">${product.formattedPrice} ₽</div>
    <div class="product__address">${product.address.city}, ${product.address.street}</div>
    <div class="product__date">${product.publishDate}</div>
  </div>
</li>`
}

export const renderAdList = (products) => {
  const shortProducts = products.slice(0, 7);
  const productsListElement = document.querySelector('.results__list');
  deleteUnusableElements(productsListElement);
  shortProducts.forEach((product) => {
    productsListElement.insertAdjacentHTML("beforeend", renderAdCard(product));
  })
  activatePopups(shortProducts)
}