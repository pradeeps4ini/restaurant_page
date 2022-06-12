import nav from "./nav";


const header = () => {
  const head = document.createElement("header");
  head.classList.add("flex");

  const heading = document.createElement("h1");
  heading.textContent = "Hawk Restaurant";
  
  const navigation = nav();
  head.appendChild(heading);
  head.appendChild(navigation);

  return head
};


export default header;
