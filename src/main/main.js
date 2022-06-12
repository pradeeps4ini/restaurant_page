import about from "./about";
import createContact from "./contact";
import menu from "./menu";

const aboutRestaurant = about();

const main = () => { 
  const mainContent = document.createElement("main")
  mainContent.appendChild(aboutRestaurant);
  
  const contact = createContact();
  mainContent.appendChild(contact);
  
  const menuContent = menu();
  mainContent.appendChild(menuContent);

  return mainContent;
};

export default main;
