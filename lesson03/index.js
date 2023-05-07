const jsTarget = document.getElementById("js-target");

const attributes = [
  {
    href: "1.html",
    src: "img/bookmark.png"
  },
  {
    href: "2.html",
    src: "img/message.png"
  }
];

attributes.map((attribute) => {
  const ul = document.createElement("ul")
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  a.href = attribute.href;
  img.src = attribute.src;

  jsTarget.appendChild(ul).appendChild(li).appendChild(a).appendChild(img);
});
