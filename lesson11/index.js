const ul = document.getElementById('js-target');

function addLoading() {
  const img = document.createElement('img');
  img.id = 'loading-img';
  img.src = 'img/loading-circle.gif';
  img.alt = 'loading';
  ul.appendChild(img);
}

function removeLoading() {
  document.getElementById('loading-img').remove();
}

const url = 'https://my-json-server.typicode.com/tom106gunma/test-json-data/data';

async function fetchData() {
  addLoading();
  try{
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = `${response.status}:Failed to acquire data.`;
      errorHandling(errorText);
    }
    const data = await response.json();
    return data;
  } catch(error) {
    errorHandling(error);
  } finally {
    removeLoading();
  }
}

function errorHandling(error) {
  const p = document.createElement("p");
  p.textContent = error;
  ul.appendChild(p);
  console.error(error);
}

async function addList() {
  const attributes = await fetchData() || {};
  if(Object.keys(attributes).length == 0) return;

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

addList();
