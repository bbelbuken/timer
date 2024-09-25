const playButton = document.querySelector("#play");
const restartButton = document.querySelector("#restart");
const svgPlay = playButton.querySelector("#svg-play");
const svgPause = playButton.querySelector("#svg-pause");
const timerEL = document.querySelector(".timer");
const circle = document.querySelector(".circle")

svgPause.style.display = "none";

const toggleSVG = () => {
  if (svgPlay.style.display === "none") {
    svgPlay.style.display = "block";
    svgPause.style.display = "none";
  } else {
    svgPlay.style.display = "none";
    svgPause.style.display = "block";
  }
};

let number = 60;
let timerInterval;
let circleInterval;
let angle = 0;

const runTimer = () => {
  if (number > 1) {
    number--;
    timerEL.innerHTML = `00:${number < 10 ? `0` + number : number}`;
  } else {
    number = 60;
    timerEL.innerHTML = "01:00";
    clearInterval(timerInterval);
    clearInterval(circleInterval);
    svgPlay.style.display = "block";
    svgPause.style.display = "none";
    playButton.classList.toggle("btn-green");
  }
};

playButton.addEventListener("click", (event) => {
  playButton.classList.toggle("btn-green");
  toggleSVG();
  moveCircle();

  if (svgPause.style.display === "none") {
    clearInterval(timerInterval);
    timerInterval = null;
    clearInterval(circleInterval);
    circleInterval = null
  } else {
    if (!timerInterval) {
      timerInterval = setInterval(runTimer, 1000);
      circleInterval = setInterval(moveCircle, 1000)
    }
  }

});

restartButton.addEventListener("click", () => {
  if (playButton.classList.contains("btn-green")) {
  playButton.classList.toggle("btn-green");
  svgPause.style.display = "none";
  svgPlay.style.display = "block";
  }

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (circleInterval) {
    clearInterval(circleInterval)
    circleInterval = null;
  }

  number = 60;
  timerEL.innerHTML = "01:00";
  angle = 0;
  circle.style.transform = `translate(-50%, -50%)`
});





const moveCircle = () => {
    const radius = 124; 
    const centerX = -5; 
    const centerY = 120; 

    angle = (angle + 6) % 360; 
    const x = centerX + radius * Math.cos((angle-90) * (Math.PI / 180)); 
    const y = centerY + radius * Math.sin((angle-90) * (Math.PI / 180));

    circle.style.transform = `translate(${x}px, ${y}px)`;
    
};
