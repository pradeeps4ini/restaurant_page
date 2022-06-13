import nav from "./nav";


const header = () => {
  const head = document.createElement("header");
  head.classList.add("flex");

  const heading = document.createElement("h1");
  heading.textContent = "Hawk Restaurant";
  
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "nav-checkbox";
  input.classList.add("nav-checkbox");

  const navigation = nav();

  head.appendChild(heading);
  head.appendChild(input);
  head.appendChild(navigation);

  const label = document.createElement("label");
  label.setAttribute("for", "nav-checkbox");
  label.classList.add("toggle-nav");
  const span = document.createElement("span");
  
  label.appendChild(span);
  head.appendChild(label);
  return head
};


export default header;
