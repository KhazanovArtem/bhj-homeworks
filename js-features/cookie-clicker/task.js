const counter = document.getElementById("clicker__counter");
const img = document.getElementById("cookie");
const speed = document.getElementById("clicker__counter_speed");
let delay = new Date();

img.onclick = function() {
    counter.textContent++;
    if (counter.textContent % 2) {
        img.width = "220";
    } else {
        img.width = "200";
    }
    now = new Date();
    speed.textContent = (1000/(now.getTime() - delay.getTime())).toFixed(2);
    delay = now;
};