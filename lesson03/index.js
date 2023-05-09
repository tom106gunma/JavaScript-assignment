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

const fragment = document.createDocumentFragment();

attributes.forEach((attribute) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  a.href = attribute.href;
  a.textContent = attribute.text;
  img.src = attribute.src;

  fragment.appendChild(li).appendChild(a).insertAdjacentElement("afterbegin",img);
});

const ul = document.getElementById("js-target");
ul.appendChild(fragment);
