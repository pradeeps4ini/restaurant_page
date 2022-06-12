import header from "./header/header";
import main from "./main/main";
import './style.css';

const toggle = () => {

}; 


function show(e) {
  const main = document.querySelector("main");
  const target = e.target;
  const menuItem = target.textContent;

  if (menuItem === "Home") {
    if (main.children[0].classList[0] === "show") {
      main.children[0].classList.toggle("show");
      (main.children[1].classList[0] === "show") ? null : main.children[1].classList.toggle("show");
      (main.children[2].classList[0] === "show") ? null : main.children[2].classList.toggle("show");
    }
  }

  if (menuItem === "Menu") {
    if (main.children[1].classList[0] === "show") {
      main.children[1].classList.toggle("show");
      (main.children[0].classList[0] === "show") ? null : main.children[0].classList.toggle("show");
      (main.children[2].classList[0] === "show") ? null : main.children[2].classList.toggle("show");
    }
  }

 if (menuItem === "Contact") {
    if (main.children[2].classList[0] === "show") {
      main.children[2].classList.toggle("show");
      (main.children[0].classList[0] === "show") ? null : main.children[0].classList.toggle("show");
      (main.children[1].classList[0] === "show") ? null : main.children[1].classList.toggle("show");
    }
  }
};


const makeHeader = (wrapper) => {
  const pageHeader = header();
  
  pageHeader.children[1].children[0].addEventListener("click", show);
  pageHeader.children[1].children[1].addEventListener("click", show);
  pageHeader.children[1].children[2].addEventListener("click", show);

  wrapper.appendChild(pageHeader);
};


const makeMain = (body) => {
  const mainContent = main();
  body.appendChild(mainContent);
}

(() => {
  const body = document.querySelector("body");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("grid");
  makeHeader(wrapper);
  makeMain(wrapper);
  
  body.appendChild(wrapper);
})();
