// selector 
const containerEl = document.querySelector(".container"),
      headerEl = document.querySelector("header");


"use strict";

/**
 * 
 * @param {*} e
 * get current top and left properties
 * then add the movementY and movementX to them 
 */
function move(e){
    let container = window.getComputedStyle(containerEl);

    let left = parseInt(container.left);
    let top = parseInt(container.top);

    containerEl.style.top = top + e.movementY + "px";
    containerEl.style.left = left + e.movementX + "px";
}


// move the div
headerEl.addEventListener("mousedown", function(){
    containerEl.addEventListener("mousemove",move);
});



// remove the eventListener when mouseup or mouseleave
headerEl.addEventListener("mouseup", function(){
    containerEl.removeEventListener("mousemove", move);
});

headerEl.addEventListener("mouseleave", function(){
    containerEl.removeEventListener("mousemove", move);
});