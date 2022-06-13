import whiteTruffle from "../assets/white-truffle.jpg";
import lemonSauce from "../assets/lemon-sauce.webp";
import cajunSeafood from "../assets/seafood-sauce.jpeg";
import pork from "../assets/pork.jpeg";
import pecanChicken from "../assets/pecan-chicken.jpeg";
import crabLobster from "../assets/crab.jpeg";
import gnocchi from "../assets/gnocchi.jpeg";
import roastedLamb from "../assets/roasted-lamb.jpeg";

const images = [whiteTruffle, lemonSauce, cajunSeafood, pork, pecanChicken, crabLobster, gnocchi, roastedLamb];

const food = (name, foodDes, price, image, altDes, i) => {
  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = name;

  const pPrice = document.createElement("p");
  const pDes = document.createElement("p");
  
  pDes.textContent = foodDes;
  pPrice.textContent = "Price: " + price;

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("imageDiv");
  const img = new Image();
  img.src = images[i];
  img.alt = altDes;
  imageDiv.appendChild(img);

  [h2, pDes, pPrice, imageDiv].forEach(item => div.appendChild(item));
  
  div.classList.add("flex");
  return div;
};


const createMenu = () => {
  
  const foodItems = {
    1: {
      name: "White Truffles Egg",
      desc: "Served with scrambled eggs, this exuisite food will sooth your liver and your brain.",
      price: "$200",
      img: "../assets/white-truffle.jpg",
      alt: "",
    },
    2: {
      name: "Lemon Sauce Pullapa",
      desc: "A dish made with lemon sauce. It will send buzzes inside your tongue.",
      price: "$300",
      img: "../assets/lemon-sauce.webp",
      alt: "",
    },
    3: {
      name: "Cajun Seafood Pasta",
      desc: "A hot and delicios recipe. It will slide down your throat and your stomach will crave to taste it.",
      price: "$340",
      img: "../assets/seafood-sauce.jpeg",
      alt: "Cajun Seafood Pasta",
    },
    4: {
      name: "Pork Chops with Raspberry Sauce",
      desc: "Pork raised on open farms, who wandered the mountains and bathed in rivers, is ready to be eaten by YOU.",
      price: "$390",
      img: "../assets/pork.jpeg",
      alt: "Pork Chops with Raspberry Sauce",
    },
    5: {
      name: "Bourban Pecan Chicken",
      desc: "Chicken cooked by the master chef, who cooked for the gods.",
      price: "$440",
      img: "../assets/pecan-chicken.jpeg",
      alt: "",
    },
    6: {
      name: "Crab-Stuffed Lobster Tail",
      desc: "Two friends, a crab and a lobster have travelled the ocean to satisfy your hunger.",
      price: "$500",
      img: "../assets/crab.jpeg",
      alt: "",
    },
    7: {
      name: "Gnocchi with Sage-Butter",
      desc: "Melted butter on gnocchi will fulfil all your desires for the food.",
      price: "$540",
      img: "../assets/gnocchi.jpeg",
      alt: "",
    },
    8: {
      name: "Roasted Rack of Lamb",
      desc: "Lamb raised with the utmost care. Fed the greenest grass. Roamed the greenest pastures under the blue sky. He is ready for you.",
      price: "$600", 
      img: "../assets/roasted-lamb.jpeg",
      alt: "",
    }
  };
  
  const div = document.createElement("div");

  const foodValue = Object.values(foodItems);
  
  let i = 0;
  for (let item of foodValue) {
    const foodItem = food(item.name, item.desc, item.price, item.img, item.alt, i);

    div.appendChild(foodItem);
    i += 1;
  };

  div.classList.add("hide")
  div.setAttribute("id", "menu");
  div.classList.add("grid");
  return div;
};

export default createMenu;
