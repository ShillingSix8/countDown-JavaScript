let bombsArray = [];

const bombImage = document.querySelector('#bombBlast');

const getBombs = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const createHtml = (image) => {
  return `<img src='${image}'/>`;
}

document.addEventListener('DOMContentLoaded', async () => {
  const serverResponse = await getBombs('http://localhost:3000/bombs');
  const serverData = serverResponse;

  bombImage.innerHTML =+ createHtml(serverResponse);
});

const renderBomb = (bombObject) => {
  const bombPic = bombBlast.querySelector("img");
  bombPic.src = bombObject.image_url;
};







