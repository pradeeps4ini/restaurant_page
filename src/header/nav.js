const nav = () => {

  const ul = document.createElement("ul");
  ul.classList.add("flex");

  const navLiOne = document.createElement("li");
  navLiOne.textContent = "Home";

  const navLiTwo = document.createElement("li");
  navLiTwo.textContent = "Menu";

  const navLiThree = document.createElement("li");
  navLiThree.textContent = "Contact";

  [navLiOne, navLiTwo, navLiThree].forEach(item => ul.appendChild(item));

  return ul;
};


export default nav;
