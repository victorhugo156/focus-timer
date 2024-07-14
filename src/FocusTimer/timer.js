import state from "./state.js"
import * as el from "./elements.js" 


export function countDown(){
    if(!state.isRunning){
        return
    }
    
    console.log("started");

    setTimeout(()=> countDown(), 1000);
}



export function updateDisplay(minutes, seconds){

    //?? = Search for nullish coalesing operator
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    /**
     * .padStart(maxLenght: number, string: "" )
     * This is a String method where you are able to set the length of your String,
     * as well as the first value of this String, for instace:
     *  - If I want a timer 00 -> the length will be 2 and the first value will be 0
     */
    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");

}