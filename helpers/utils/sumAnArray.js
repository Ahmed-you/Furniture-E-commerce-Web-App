export const sumArrayOfMoney = (arrayOfMoney) => {
  const totalPrice = arrayOfMoney?.reduce((total, currentPrice) => {
    return total + currentPrice;
  }, 0);
  return totalPrice;
};