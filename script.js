let millisecond = 0;
let second = 0;
let minute = 0;
let intervalo;

document.getElementById("start").addEventListener('click', startTime);
document.getElementById("pause").addEventListener('click', pauseTimer);
document.getElementById("reset").addEventListener('click', resetTimer);

function startTime() {
    if (!intervalo) {
        intervalo = setInterval(timer, 10); // Incrementa a cada 10 milissegundos
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
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    atualizarDisplay();
}

function atualizarDisplay() {
    // Atualiza o display com minutos, segundos e milissegundos formatados
    document.getElementById('timer').innerText = 
        `${returnData(minute)}:${returnData(second)}:${returnData(Math.floor(millisecond / 10))}`;
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`;
}
