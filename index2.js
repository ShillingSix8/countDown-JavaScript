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


const fetchBombImage = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data from fetchBombImage", data);
  return data;
}

const createBombImage = (imageSource) => {
  return `<img src="${imageSource}" alt='Bomb Blast' />`;
};

document.addEventListener("DOMContentLoaded", async () => {
  const serverResponse = await fetchBombImage('http://localhost:3000/bombs');


  serverResponse.forEach((imageItem) => {
    bombImage.innerHTML += createBombImage(imageItem.image_url);
  });
});

let myBomb = 0;


function bombCarousel() {
  let image = bombBlast.querySelectorAll("img");
  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  myBomb++;
  if (myBomb > image.length) {
    myBomb = 1;
  }
  image[myBomb - 1].style.display = "block";
  setTimeout(bombCarousel, 1000);
}

bombCarousel(createBombImage);
