const listContainer = document.getElementById('js-target');
const messageContainer = document.getElementById('js-message');
const button = document.getElementById('js-button');
const url = 'https://my-json-server.typicode.com/tom106gunma/test-json-data/data';

function addLoading() {
  const img = document.createElement('img');
  img.id = 'loading-img';
  img.src = 'img/loading-circle.gif';
  img.alt = 'loading';
  listContainer.appendChild(img);
}

function removeLoading() {
  document.getElementById('loading-img').remove();
}

async function fetchData(apiUrl) {
  addLoading();
  try{
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorMessage = `${response.status}:Error occurred.`;
      messageContainer.textContent = errorMessage;
      console.error(errorMessage);
    }

    const data = await response.json();
    if (data.length === 0) {
      const emptyMessage = 'No data available.';
      messageContainer.textContent = emptyMessage;
    } else {
      return data;
    }

  } catch(error) {
    messageContainer.textContent = error;
    console.error(error);

  } finally {
    removeLoading();
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

  listContainer.appendChild(fragment);
}

async function addList() {
  const attributes = await fetchData(url);
  if(attributes){
    createListItem(attributes);
  }
}

button.addEventListener('click', addList);
