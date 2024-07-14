import state from "./state.js";
import * as events from "./events.js"
import * as timer from "./timer.js"

//This function will become an object when I import it
export function start(minutes, seconds){
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay();

    events.registerControls();
}