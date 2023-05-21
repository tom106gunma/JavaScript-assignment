const ul = document.getElementById('js-target');

function showLoading() {
  const img = document.createElement('img');
  img.id = 'loading-img';
  img.src = 'loading-circle.gif';
  img.alt = 'loading';
  ul.appendChild(img);
}

function removeLoading() {
  const loadingImg = document.getElementById('loading-img');
  loadingImg.remove();
}

function getAttributes() {
  return new Promise((resolve) => {
    setTimeout(() => {
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
    }, 3000);
  })
}

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

async function showList() {
  showLoading();
  const attributes = await getAttributes();
  removeLoading();
  createList(attributes);
}

showList();
