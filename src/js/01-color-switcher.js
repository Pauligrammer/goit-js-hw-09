const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

function randomHexColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

startBtn.addEventListener("click", () => {
    startBtn.setAttribute('disabled', '')
  timerId = setInterval(() => {
    document.body.style.backgroundColor = randomHexColor();
  }, 1000);
  stopBtn.removeAttribute('disabled');
});


stopBtn.addEventListener("click", () => {
  stopBtn.setAttribute('disabled', '')
  clearInterval(timerId);
    startBtn.removeAttribute('disabled');
});

