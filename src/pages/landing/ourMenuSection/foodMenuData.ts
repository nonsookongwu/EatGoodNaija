import {
  eforRiro,
  jollofRice,
  eggSauce,
  friedRice,
  fried_Rice,
  grilledCorn,
  beefStew,
  ofeAkwu,
  // egusiSoup,
  // ohaSoup,
  // okraSoup,
  tomatoes,
  // riceStew,
  roastedChicken,
  // roastedCorn,
  roastedFish,
  // roastedYam,
  suya,
  // tomatoStew,
  sweetPotatoes,
  yamTubers,
  vegetableRice,
  yam,
} from "../../../assets";



export interface FoodMenuData {
  name: string;
  price: string;
  weight: string;
  category: number;
  img: string;
}

export const foodMenuData = [
  {
    name: "Fried Rice",
    price: "100,000",
    weight: "500g",
    category: 0,
    img: fried_Rice,
  },
  {
    name: "Native Jollof Rice",
    price: "100,000",
    weight: "500g",
    category: 0,
    img: jollofRice,
  },
  {
    name: "Efo Riro",
    price: "100,000",
    weight: "500g",
    category: 1,
    img: eforRiro,
  },
  {
    name: "Egg Sauce",
    price: "100,000",
    weight: "500g",
    category: 1,
    img: eggSauce,
  },
  {
    name: "Fried Rice",
    price: "100,000",
    weight: "500g",
    category: 0,
    img: friedRice,
  },
  {
    name: "Roasted Fish",
    price: "100,000",
    weight: "500g",
    category: 2,
    img: roastedFish,
  },
  {
    name: "Roasted Corn",
    price: "100,000",
    weight: "500g",
    category: 2,
    img: grilledCorn,
  },
  {
    name: "Nigerian Beef Stew",
    price: "100,000",
    weight: "500g",
    category: 1,
    img: beefStew,
  },
  {
    name: "Yam Tubers",
    price: "100,000",
    weight: "500g",
    category: 3,
    img: yamTubers,
  },
  {
    name: "Raw Tomatoes",
    price: "100,000",
    weight: "500g",
    category: 3,
    img: tomatoes,
  },
  {
    name: "Vegetable Rice",
    price: "100,000",
    weight: "500g",
    category: 0,
    img: vegetableRice,
  },
  {
    name: "Suya",
    price: "100,000",
    weight: "500g",
    category: 2,
    img: suya,
  },
  {
    name: "Raw Potatoes",
    price: "100,000",
    weight: "500g",
    category: 3,
    img: sweetPotatoes,
  },
  {
    name: "Raw Yam",
    price: "100,000",
    weight: "500g",
    category: 3,
    img: yam,
  },
  {
    name: "Banga Soup",
    price: "100,000",
    weight: "500g",
    category: 1,
    img: ofeAkwu,
  },
  {
    name: "Roasted Chicken",
    price: "100,000",
    weight: "500g",
    category: 2,
    img: roastedChicken,
  },
];