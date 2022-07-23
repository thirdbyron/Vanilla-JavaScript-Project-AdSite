import { formatDate, getDateString, getPublishDateString } from './utils/date.js';


const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `&thinsp;`)
};


export const adaptDataToClient = (products) => {
  return products.map((product, index) => {
    const date = formatDate(product['publish-date'])
    return {
      ...product,
      id: index + 1,
      formattedPrice: formatPrice(product.price),
      dateFormatted: getDateString(date),
      publishDateToClient: getPublishDateString(date)
    }
  })
};