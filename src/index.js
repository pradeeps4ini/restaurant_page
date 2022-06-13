import header from "./header/header";
import main from "./main/main";
import footer from "./footer/footer"

import './style.css';


function show(e) {
  const main = document.querySelector("main");
  const target = e.target;
  const menuItem = target.textContent;
  
  ["about", "contact", "menu"].forEach((id) => document.getElementById(id).classList.add("hide"));

  if (menuItem === "Home") main.children[0].classList.toggle("hide");

  if (menuItem === "Contact") main.children[1].classList.toggle("hide");

  if (menuItem === "Menu") main.children[2].classList.toggle("hide"); 
};


const makeHeader = (wrapper) => {
  const pageHeader = header();
  
  pageHeader.children[2].children[0].addEventListener("click", show);
  pageHeader.children[2].children[1].addEventListener("click", show);
  pageHeader.children[2].children[2].addEventListener("click", show);

  wrapper.appendChild(pageHeader);
};


const makeMain = (body) => {
  const mainContent = main();
  body.appendChild(mainContent);
}


const makeFooter = (body) => {
  const footerContent = footer();
  body.appendChild(footerContent);
}

(() => {
  const body = document.querySelector("body");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("grid");
  makeHeader(wrapper);
  makeMain(wrapper);
  makeFooter(wrapper); 
  body.appendChild(wrapper);
})();
