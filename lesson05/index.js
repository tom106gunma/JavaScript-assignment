const promise = new Promise((resolve) => {
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

  resolve(attributes);

}).then((attributes) => {
  const fragment = document.createDocumentFragment();

  attributes.forEach((attribute) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.href = `/${attribute.to}`;
    a.textContent = attribute.text;
    img.src = attribute.img;
    img.alt = attribute.alt;

    fragment.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
  });

  const ul = document.getElementById('js-target');
  ul.appendChild(fragment);
});
