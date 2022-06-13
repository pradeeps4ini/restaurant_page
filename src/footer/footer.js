const footerDiv = () => {
  const div = document.createElement("div");

  const p = document.createElement("p");
  const a = document.createElement("a");
  p.textContent = "Made by Pradeep Saini";
  a.href = "linkedin.com/in/pradeepsaini01";

  p.appendChild(a);

  div.appendChild(p);

  return div
}


export default footerDiv;
