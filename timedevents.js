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
    }, 2000); //Function using setInterval to advance gameClock time every 2000 miliseconds creating a nice updating game.  This could be enlarged to capture the game as a whole
}

let doubleDigitTime = (i) => {
    if (i < 10) {i = "0" + i}; // Add 0 in front of single digit time value
    return i;
}

//Gameplay operations

let puckMovement = () => {
    //let toShoot = 0; //chance for a player to make a shot attempt when in posession
    //let toScore = 0; // chance for a player to get the puck into the net after a shot
    let puckPositionX = 0; //the puck's zone position on the ice 0-9 x coord in rinkPlayZone
    //let puckPositionY = 0; //the puck's zone position on the ice 0-4 y coord in rinkPlayZone
    let rinkPlayZone = 1; //different 'zones' on the ice that the play can occupy.  Still needs to be defined
    setInterval(() => {
        puckPositionX++;
        if (puckPositionX == 10) {
            puckPositionX = 0;
            rinkPlayZone = rinkPlayZone + 3;
        }
        if (rinkPlayZone > 12) {
            rinkPlayZone = 1;
        }
        document.getElementById("puck_position").innerHTML = "Current Position: " + rinkPlayZone + "." + puckPositionX;
    }, 2000);
}


window.onload = gameClock();
window.onload = puckMovement();