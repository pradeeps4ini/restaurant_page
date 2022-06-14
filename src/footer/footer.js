const footerDiv = () => {
  const footer = document.createElement("footer");

  const p = document.createElement("p");
  const a = document.createElement("a");
  a.href = "https://www.linkedin.com/in/pradeepsaini01"
  a.textContent = "Made by Pradeep Saini";
  p.appendChild(a);

  footer.appendChild(p);
  footer.classList.add("grid");
  return footer; 
}


export default footerDiv;
