const buttonStart = document.querySelector("[data-start]");
const buttonStop = document.querySelector("[data-stop]");
const body = document.querySelector('body');

let timerId = null;

buttonStart.addEventListener("click", () => {
    buttonStart.disabled = true;
    timerId = setInterval(() => {
        let randomColor = getRandomHexColor();
        body.style.backgroundColor = `${randomColor}`;
        console.log(randomColor);
    }, 1000);
});

buttonStop.addEventListener("click", () => {
    clearInterval(timerId);
    buttonStart.disabled = false;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}