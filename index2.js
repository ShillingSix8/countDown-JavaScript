const startingMinutes = 1;
let time = startingMinutes * 60;

const counter = document.querySelector(`#counter`);

setInterval(updateCounter, 1000);

function updateCounter() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 1 ? "0" + seconds : seconds;
  counter.innerHTML = `${minutes}:${seconds}`;
  time--;
}

/////////////////////////////////////////////


const bombImage = document.querySelector('#bombBlast');

const url = "http://localhost:3000/bombs/";

const fetchBombImage = async (url) => {
  const response = await fetch(url);
  const Data = await response.json();
  return Data;
}

const createBombImage = (imageItem) => {
  return `<img src="${imageItem}" alt='Bomb Blast' />`;
};

document.addEventListener("DOMContentLoaded", async () => {
  const serverResponse = await fetchBombImage('http://localhost:3000/bombs');
  const serverData = serverResponse;

  console.log(serverResponse);

  serverData.forEach((imageItem) => {
    bombImage.innerHTML += createBombImage(imageItem);
  })
});

let myBomb = 0;

bombCarousel(createBombImage);

function bombCarousel() {
  let i;
  let x = bombBlast.querySelector("img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myBomb++;
  if (myBomb > x.length) {
    myBomb = 1;
  }
  x[myBomb - 1].style.display = "block";
  setTimeout(bombCarousel, 1000);
}