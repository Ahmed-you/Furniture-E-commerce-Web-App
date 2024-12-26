import "./components/Header/index.js";
import "./components/Main/index.js";
import { setLocalStorage } from "./helpers/localStorage.js";
const products = [
  {
    id: "2313",
    name: "BASKET WITH HANDLES",
    price: "160",
    imgURL: "basket_with_handles.jpg",
    category: "decorations",
  },
  {
    id: "1233",
    name: "DECO ACCESSORY ",
    price: "100",
    imgURL: "deco_accessory.jpg",
    category: "basics",
  },
  {
    id: "3153",
    name: "POTTERY VASE",
    price: "25",
    imgURL: "pottery_vase.jpg",
    category: "VASES",
  },
  {
    id: "3453",
    name: "FLOWER VASE",
    price: "35",
    imgURL: "flower_vase.jpg",
    category: "VASES",
  },
  {
    id: "5313",
    name: "ROSE HOLDBACK",
    price: "200",
    imgURL: "rose_holdback.jpg",
    category: "decorations",
  },
  {
    id: "7353",
    name: "TABLE LAMB",
    price: "60",
    imgURL: "table_lamb.jpg",
    category: "lighting",
  },
  {
    id: "1413",
    name: "WALL CLOCK",
    price: "7",
    imgURL: "wall_clock.jpg",
    category: "basics",
  },
  {
    id: "1733",
    name: "SMALL TABLE",
    price: "201",
    imgURL: "small_table.jpg",
    category: "basics",
  },
];

setLocalStorage("products", products);
const init = () => {
  console.log("I am 'Index.js' Ready And Loaded");
};

init();
