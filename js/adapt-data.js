const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `&thinsp;`)
};

export const adaptDataToClient = (products) => {
  return products.map((product, index) => {
    return {
      ...product,
      id: index + 1,
      formattedPrice: formatPrice(product.price),
    }
  })
};