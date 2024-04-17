let timer;
let totalSeconds = 0;

function startTimer() {
    let minutes = parseInt(document.getElementById('minutesInput').value);
    let seconds = parseInt(document.getElementById('secondsInput').value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert("Please enter valid numbers.");
        return;
    }

    totalSeconds = minutes * 60 + seconds;

    if (totalSeconds <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    let alarmSound = new Audio('Coi-bao-thuc-trong-quan-doi-Ken.mp3');

    timer = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            document.getElementById('timerDisplay').innerHTML = "00:00";
            alarmSound.play();
            return;
        }

        let displayMinutes = Math.floor(totalSeconds / 60);
        let displaySeconds = totalSeconds % 60;

        displayMinutes = displayMinutes < 10 ? "0" + displayMinutes : displayMinutes;
        displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;

        document.getElementById('timerDisplay').innerHTML = displayMinutes + ":" + displaySeconds;

        totalSeconds--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('timerDisplay').innerHTML = "00:00";
    document.getElementById('minutesInput').value = "";
    document.getElementById('secondsInput').value = "";
}
