import { RestaurantProps } from "./../../types/index";
import DunkinDonut from "../images/RestaurantsLogo/DunkinDonut.svg";
import FoodWorld from "../images/RestaurantsLogo/Foodworld.svg";
import Kfc from "../images/RestaurantsLogo/Kfc.svg";
import Pizzahub from "../images/RestaurantsLogo/Pizzahub.svg";
import RedSquare from "../images/RestaurantsLogo/RedSquare.svg";
import RubyTuesday from "../images/RestaurantsLogo/RubyTuesday.svg";
import Subway from "../images/RestaurantsLogo/Subway.svg";
import TacoBell from "../images/RestaurantsLogo/TacoBell.svg";
import Chicken from "../images/RestaurantFood/Chicken.svg";
import Donut from "../images/RestaurantFood/Donut.svg";
import Foodworlds from "../images/RestaurantFood/Foodworld.svg";
import Pizza from "../images/RestaurantFood/Pizza.svg";
import Ruby from "../images/RestaurantFood/Ruby.svg";
import Scream from "../images/RestaurantFood/Scream.svg";
import Taco from "../images/RestaurantFood/Taco.svg";
import Thai from "../images/RestaurantFood/Thai.svg";

export const restaurantData: RestaurantProps[] = [
  {
    src: Chicken,
    logo: DunkinDonut,
    alt: "Dunkin Donut",
    title: "Dunkin Donut",
    saleOff: "20",
    star: "46",
    isOpen: false,
  },
  {
    src: Donut,
    logo: FoodWorld,
    alt: "DanCake",
    title: "DanCake",
    saleOff: "15",
    star: "4.00",
    isOpen: false,
  },
  {
    src: Foodworlds,
    logo: Kfc,
    alt: "Sandwick",
    title: "Sandwick",
    saleOff: "15",
    star: "8.88",
    isOpen: true,
  },
  {
    src: Pizza,
    logo: Pizzahub,
    alt: "Thai Soup",
    title: "Thai Soup",
    saleOff: "20",
    star: "2.88",
    isOpen: true,
  },
  {
    src: Ruby,
    logo: RedSquare,
    alt: "Toffer Cake",
    title: "Toffer Cake",
    saleOff: "10",
    star: "9.88",
    isOpen: true,
  },
  {
    src: Scream,
    logo: RubyTuesday,
    alt: "Sale",
    title: "Cheese Burger",
    saleOff: "15",
    star: "3.88",
    isOpen: true,
  },
  {
    src: Taco,
    logo: Subway,
    alt: "DanCake",
    title: "DanCake",
    saleOff: "20",
    star: "4.00",
    isOpen: true,
  },
  {
    src: Thai,
    logo: TacoBell,
    alt: "Sandwick",
    title: "Sandwick",
    saleOff: "10",
    star: "8.88",
    isOpen: true,
  },
];
