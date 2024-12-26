export const makeArrayOfPricesFromArrayOfProjectsIdes = (
  arrayOfProjectsIdes,
  products
) => {
  const arrayOfPrices = arrayOfProjectsIdes.reduce((arrayOfPrices, id) => {
    const product = products.find((product) => product.id == id);
    if (product) {
      arrayOfPrices.push(parseInt(product.price));
    }
    return arrayOfPrices;
  }, []);
  return arrayOfPrices;
};
