let millisecond = 0;
let second = 0;
let minute = 0;
let intervalo;

const timerDisplay = document.getElementById('timer');
const saveTimeButton = document.getElementById('saveTime');
const clearTimeButton = document.getElementById('clearTime');
const savedTimesList = document.getElementById('laps');

document.getElementById("start").addEventListener('click', startTime);
document.getElementById("pause").addEventListener('click', pauseTimer);
document.getElementById("reset").addEventListener('click', resetTimer);

function startTime() {
    if (!intervalo) {
        intervalo = setInterval(timer, 10);
    }
}

function pauseTimer() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetTimer() {
    clearInterval(intervalo);
    intervalo = null;
    millisecond = 0;
    second = 0;
    minute = 0;
    atualizarDisplay();
}

function timer() {
    millisecond += 10;
    if (millisecond === 1000) {
        millisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    atualizarDisplay();
}

function atualizarDisplay() {
    timerDisplay.innerText = 
        `${returnData(minute)}:${returnData(second)}:${returnData(Math.floor(millisecond / 10))}`;
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`;
}

saveTimeButton.addEventListener('click', () => {
    const currentTime = timerDisplay.innerText;
    const listItem = document.createElement('li');
    listItem.textContent = currentTime;
    savedTimesList.appendChild(listItem);
});

clearTimeButton.addEventListener('click', () => {
    savedTimesList.innerHTML = '';
});
