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

let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("bomb");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 1000);
}
