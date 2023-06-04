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

    const data = await response.json();
    if (Object.keys(data).length === 0) {
      if (!response.ok) {
        const errorMessage = `${response.status}:Error occurred.`;
        addDisplayMessage(errorMessage);
        console.error(errorMessage);
      } else {
        const message = 'No data available.';
        addDisplayMessage(message);
      }
    } else {
      return data;
    }

  } catch(error) {
    addDisplayMessage(error);
    console.error(error);

  } finally {
    removeLoading();
  }
}

function addDisplayMessage(message) {
  const P = document.createElement("p");
  P.textContent = message;
  ul.appendChild(P);
}

async function addList() {
  const attributes = await fetchData();
    if(attributes){
      createListItem(attributes)
    }
  }

function createListItem(attributes) {
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
