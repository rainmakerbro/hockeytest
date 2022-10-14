let gameClock = () => {
    let periodSec = 60;
    let periodMin = 20;
    let periodNum = 1;
    setInterval(() => {
        periodSec = periodSec - 5;
        if (periodSec <= 00) {
            periodMin--;
            periodSec = 60;
            if (periodMin <= 0) {
                periodMin = 20;
                periodNum++;
            }
        }
        periodSec = doubleDigitTime(periodSec);
        periodMin = doubleDigitTime(periodMin);
        document.getElementById("current_period").innerHTML = "Period " + periodNum;
        document.getElementById("game_clock").innerHTML = periodMin + ":" + periodSec;
    }, 2000);
}

let doubleDigitTime = (i) => {
    if (i < 10) {i = "0" + i}; // Add 0 in front of single digit time value
    return i;
}

window.onload = gameClock();