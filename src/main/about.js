const contentBox = (h2Title, para) => {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = h2Title;

  const p = document.createElement("p");
  p.textContent = para;

  section.appendChild(h2);
  section.appendChild(p);

  return section;
};


const about = () => {

  const story = "Everything we do is a celebration of food - from how we source our food materials to serving up new ways for you to enjoy it. Since 1968, we are committed to bring a experience you find only here.";
  const storyHeading = "OUR STORY";

  const kitchenItems = "We serve item1, item2, item3, item4, item5; prepared with the best material out there and with the best hands in the trade.";
  const kitchenHeading = "FROM THE KITCHEN";

  const storySection = contentBox(storyHeading, story);
  const kitchenSection = contentBox(kitchenHeading, kitchenItems);

  const articles = document.createElement("article");
  articles.appendChild(storySection);
  articles.appendChild(kitchenSection);
  articles.setAttribute("id", "about");
  return articles;
};


export default about;
