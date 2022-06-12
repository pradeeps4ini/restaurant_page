const makeContact = (street, name, address) => {

  const h2 = document.createElement("h2");
  h2.textContent = "CONTACT US:";

  const streetNum = document.createElement("p");
  const streetName = streetNum.cloneNode(true);
  const locationAdd = streetNum.cloneNode(true);

  streetNum.textContent = street;
  streetName.textContent = name;
  locationAdd.textContent = address;

  const div = document.createElement("div");
  const paraDiv = div.cloneNode(true);

  [streetNum, streetName, locationAdd].forEach(para => paraDiv.appendChild(para));
  [h2, paraDiv].forEach(item => div.appendChild(item));
  
  div.classList.toggle("show");
  return div;
};


const createContact = () => {
  const street = "1902/2";
  const name = "Brumburg street";
  const address = "Behind the ancient pond, Mordor";

  return makeContact(street, name, address);
}

export default createContact;
