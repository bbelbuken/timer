const playButton = document.querySelector("#play");
const svgPlay = playButton.querySelector("#svg-play");
const svgPause = playButton.querySelector("#svg-pause");

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

playButton.addEventListener("click", (event) => {
    playButton.classList.toggle("btn-green")
    toggleSVG();
});

