const attributes = [
  {
    to: "bookmark.html",
    img: "1.png",
    alt: "画像1",
    text: "ブックマーク"
  },
  {
    to: "message.html",
    img: "2.png",
    alt:"画像2",
    text: "メッセージ"
  }
];

const ul = document.getElementById('js-target');

function createList(attributes) {
  const fragment = document.createDocumentFragment();

  for(const attribute of attributes) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.href = `/${attribute.to}`;
    a.textContent = attribute.text;
    img.src = attribute.img;
    img.alt = attribute.alt;
    fragment.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
  };

  ul.appendChild(fragment);
}

function showLoading() {
  ul.innerHTML = '<img src="loading-circle.gif" alt="loading"></img>';
}

function hideLoading() {
  ul.innerHTML = '';
}

showLoading();
new Promise((resolve) => {
  setTimeout(() => {
    resolve(attributes);
  }, 3000);
}).then((value) => {
  hideLoading();
  createList(value);
});
