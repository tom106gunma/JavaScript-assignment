const jsTarget = document.getElementById("js-target");
const ul = document.createElement("ul");
const fragment = document.createDocumentFragment();

const attributes = [
  {
    href: "a1.html",
    text: "a1",
    src: "img/bookmark.png"
  },
  {
    href: "a2.html",
    text: "a2",
    src: "img/message.png"
  }
];

attributes.map((attribute) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  a.href = attribute.href;
  a.textContent = attribute.text;
  img.src = attribute.src;

  fragment.appendChild(li).appendChild(a).insertAdjacentElement("afterbegin",img);
});

jsTarget.appendChild(ul).appendChild(fragment);
