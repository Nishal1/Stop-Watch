let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let timerId;

function startTimer() {
    seconds++;
    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;
     if(minutes / 60 === 1) {
         minutes = 0;
         hours++;
     }
    }
    displaySeconds = zeroChecker(seconds);
    displayMinutes = zeroChecker(minutes);
    displayHours = zeroChecker(hours);

    document.getElementById("timer").innerHTML = displayHours + ":" + displayMinutes + ":"+ displaySeconds;
    timerId = setTimeout(startTimer, 1000);
}

function zeroChecker(time) {
    if(time < 10) {
        return "0" + time;
    }
    return time;
}

function resetTimer() {
    clearTimeout(timerId);
    displaySeconds = displayMinutes = displayHours = "0" + "0";
    seconds = minutes = hours = 0;
    document.getElementById("timer").innerHTML = displayHours + ":" + displayMinutes + ":"+ displaySeconds;
}

function stopTimer() {
    clearTimeout(timerId);
}
