const ul = document.getElementById("js-target");

const li = document.createElement("li");

const img = document.createElement("img");
img.src = "bookmark.png";
img.alt = "ブックマーク";

const a = document.createElement("a");
a.href = "1.html"
a.textContent = "これです"

ul.appendChild(li).appendChild(a).prepend(img);
