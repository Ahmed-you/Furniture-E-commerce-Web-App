import {
  getLocalStorage,
  setLocalStorage,
} from "../../helpers/localStorage.js";
import { createTemplate } from "../../helpers/utils/createTemplateUtil.js";
import { makeArrayOfPricesFromArrayOfProjectsIdes } from "../../helpers/utils/makeArrayOfPricesFromArrayOfProjectsIdes.js";
import { sumArrayOfMoney } from "../../helpers/utils/sumAnArray.js";
import { listItemProduct } from "../Main/templates/listItemTemplate.js";

const products = getLocalStorage("products");

let totalPrice;
const cartItemsContainer = getElement(".cart__items");
const listPriceTotal = getElement(".list-price_total");
const headerPriceTotal = getElement(".header-price");
//this function will preview products in cart
export const previewProductsInCart = () => {
  const pricesArray = new Set([]);

  cartItemsContainer.innerHTML = "";
  const cartProductsIdes = getLocalStorage("cartProductsIdes");
  cartProductsIdes?.forEach((id) => {
    const selectedProduct = products.find((product) => product.id == id);
    pricesArray.add(parseInt(selectedProduct.price));

    cartItemsContainer.insertAdjacentHTML(
      "afterbegin",
      createTemplate(listItemProduct, selectedProduct)
    );
    totalPrice = sumArrayOfMoney(Array.from(pricesArray));

    listPriceTotal.innerHTML = "$" + totalPrice;
    headerPriceTotal.innerHTML = "$" + totalPrice;
  });

  if (cartProductsIdes?.length == 0) {
    cartItemsContainer.innerHTML = `<div style=' font-size: 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; color: rgb(174, 174, 174);'> <h3>No Items</h3>
    Check Out Our Store You Will Love What We Sell</div>`;
    listPriceTotal.innerHTML = "$" + 0;
    headerPriceTotal.innerHTML = "$" + 0;
  }
};

// listPriceTotal.innerHTML = sumArrayOfMoney();

//this function gives the total amount of money for your cart



cartItemsContainer.addEventListener("click", (e) => {
  const { target } = e;

  if (target.closest(".remove_item")) {
    const cartItem = target.closest(".cart__item");
    const cartProductsIdes = getLocalStorage("cartProductsIdes");
    const selectedElementId = cartItem.id;
    const selectedIndex = cartProductsIdes.findIndex((cartProductsId) => {
      return cartProductsId == selectedElementId;
    });

    cartProductsIdes.splice(selectedIndex, 1);
    const totalPrice = sumArrayOfMoney(
      makeArrayOfPricesFromArrayOfProjectsIdes(cartProductsIdes, products)
    );
    listPriceTotal.innerHTML = "$" + totalPrice;
    headerPriceTotal.innerHTML = "$" + totalPrice;
    setLocalStorage("cartProductsIdes", cartProductsIdes);
    cartItem.remove();

    if (cartProductsIdes.length == 0) {
      cartItemsContainer.innerHTML = `<div style=' font-size: 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; color: rgb(174, 174, 174);'> <h3>No Items</h3> 
         Check Out Our Store You Will Love What We Sell</div>`;
      listPriceTotal.innerHTML = "$" + 0;
      headerPriceTotal.innerHTML = "$" + 0;
    }
  }
});

const init = () => {
  previewProductsInCart();
};

init();
