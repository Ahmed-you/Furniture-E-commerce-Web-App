import {
  getLocalStorage,
  setLocalStorage,
} from "../../../helpers/localStorage.js";
import { createTemplate } from "../../../helpers/utils/createTemplateUtil.js";
import { previewProductsInCart } from "../../Header/index.js";
import { productTemplate } from "../templates/productTemplate.js";

const productsContainer = getElement(".products");
const productsHeader = getElement(".products-header");

productsContainer.addEventListener("click", (e) => {
  const cartProductsIdes = new Set(getLocalStorage("cartProductsIdes") || []);

  if (!e.target.closest(".product-item_add_to_cart_button")) return;
  const productID = e.target.closest(".product-item").id;
  cartProductsIdes.add(productID);
  setLocalStorage("cartProductsIdes", Array.from(cartProductsIdes));
  previewProductsInCart();
});
const previewProductsOnMainPage = (category = "all", priceRange = Infinity) => {
  productsContainer.innerHTML = "";
  const products = getLocalStorage("products");

  // Filter products by category and price range
  let filteredProducts = products?.filter((product) => {
    const matchesCategory =
      category === "all" ||
      product.category.toLowerCase() === category.toLowerCase();
    const matchesPrice = parseInt(product.price) <= priceRange;

    return matchesCategory && matchesPrice;
  });

  // Store filtered products in local storage
  setLocalStorage("selectedProductsByCategory", filteredProducts);

  // Render filtered products
  filteredProducts?.forEach((product) => {
    const productHTMl = createTemplate(productTemplate, product);
    productsContainer.insertAdjacentHTML("afterbegin", productHTMl);
  });
};

productsHeader.addEventListener("click", (e) => {
  let selectedCategory = "all";
  let selectedPriceRange = Infinity;

  // Handle category selection
  if (e.target.closest(".products-categories span")) {
    productsHeader
      .querySelectorAll(".products-categories span")
      .forEach((element) => {
        element.classList.remove("selected");
      });

    if (e.target.closest(".products-categories_all")) {
      selectedCategory = "all";
    } else if (e.target.closest(".products-categories_decoration")) {
      selectedCategory = "decorations";
    } else if (e.target.closest(".products-categories_lighting")) {
      selectedCategory = "lighting";
    } else if (e.target.closest(".products-categories_vases")) {
      selectedCategory = "vases";
    } else if (e.target.closest(".products-categories_basics")) {
      selectedCategory = "basics";
    }

    e.target.classList.add("selected");
  }

  // Handle price range selection
  if (e.target.closest(".all-prices li")) {
    productsHeader.querySelectorAll(".all-prices li").forEach((element) => {
      element.classList.remove("selected-white");
    });

    if (e.target.closest(".range_0_10")) {
      selectedPriceRange = 10;
    } else if (e.target.closest(".range_10_20")) {
      selectedPriceRange = 20;
    } // Add more ranges as needed

    e.target.classList.add("selected-white");
  }

  // Preview products based on selected filters
  previewProductsOnMainPage(selectedCategory, selectedPriceRange);
});

const init = () => {
  previewProductsOnMainPage();
};

init();
