const ul = document.getElementById("js-target");

// li要素を作成
const li = document.createElement("li");

// img要素を作成
const img = document.createElement("img");
img.src = "bookmark.png";
img.alt = "ブックマーク";

// a要素を作成
const a = document.createElement("a");
a.href = "1.html"
a.textContent = "これです"

// ulの中に差し込む imgはaの先頭に
ul.appendChild(li).appendChild(a).prepend(img);
