export const getData = (cb) => {
  fetch('https://main-shop-fake-server.herokuapp.com/db')
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error();
  })
  .then((data) => data.products)
  .then((productsData) => {
    cb(productsData);
  })
  .catch((err) => {
    console.log(err)
  })
}