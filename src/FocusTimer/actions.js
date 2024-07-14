
import state from "./state.js"
import * as timer from "./timer.js"

//The name of this function needs to be the same name of the data-action in the HTML file
export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle("running");

    timer.countDown();
}

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove("running");
}

export function set(){
    console.log("we are at set Timer")
}

export function musicRunning(){
    state.isMute = document.documentElement.classList.toggle("music-on");
}