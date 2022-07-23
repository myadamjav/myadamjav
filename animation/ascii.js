var FRAMES = [];
var LENGTH = 0;
var CURRENT = 0;
var DELAY = 250;
var INTERVAL;
var TEXTAREA;
function onStart() {
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    document.getElementById("stop").disabled = false;
    TEXTAREA = document.getElementById("text-area").value;
    FRAMES = TEXTAREA.split("=====\n");
    LENGTH = FRAMES.length;
    CURRENT = 0;
    INTERVAL = setInterval(runAnimation, DELAY);    
}



function runAnimation() {
    document.getElementById("text-area").value = FRAMES[CURRENT];
    CURRENT = (CURRENT + 1) % LENGTH;
}

function onStop() {
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(INTERVAL);
    document.getElementById("text-area").value = TEXTAREA;
}

function changeAnimation() {
    document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
}

function changeFontSize() {
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

function onChecked() {
    if(document.getElementById("turbo").checked === true) {
        DELAY = 50;
        clearInterval(INTERVAL);
        INTERVAL = setInterval(runAnimation, DELAY);
    }    
    else {
        DELAY = 250;
        clearInterval(INTERVAL);
        INTERVAL = setInterval(runAnimation, DELAY);
    }
}
