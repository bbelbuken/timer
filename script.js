const playButton = document.querySelector("#play");
const restartButton = document.querySelector("#restart")
const svgPlay = playButton.querySelector("#svg-play");
const svgPause = playButton.querySelector("#svg-pause");
const timerEL = document.querySelector(".timer")


svgPause.style.display = "none"



const toggleSVG = () => {
    if (svgPlay.style.display === "none") {
        svgPlay.style.display = "block";
        svgPause.style.display = "none"
    } else {
        svgPlay.style.display = "none";
        svgPause.style.display = "block";
    }

}

let number = 60;
let timerInterval;
const runTimer = () => {
    if (number > 1) {
            number--;
    timerEL.innerHTML = `00:${number < 10 ? `0` + number : number}`
    } else {
        number = 60;
        timerEL.innerHTML = "01:00"
        clearInterval(timerInterval)
        svgPlay.style.display = "block";
        svgPause.style.display = "none"
        playButton.classList.toggle("btn-green")
        
    }
}


playButton.addEventListener("click", (event) => {
    playButton.classList.toggle("btn-green");
    toggleSVG();

    
    if (svgPause.style.display === "none") {
        clearInterval(timerInterval);
        timerInterval = null;
    } else {
        if (!timerInterval) {
            timerInterval = setInterval(runTimer, 1000);
        }
    }
});

restartButton.addEventListener("click", () => {
    playButton.classList.contains("btn-green")
        playButton.classList.toggle("btn-green");
        svgPause.style.display = "none"
        svgPlay.style.display = "block"

    if (timerInterval) {
        clearInterval(timerInterval)
        timerInterval = null
    }

    number = 60;
    timerEL.innerHTML= "01:00"
    

})

