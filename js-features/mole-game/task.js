const lost = document.getElementById("lost");
const dead = document.getElementById("dead");

getHole = index => document.getElementById(`hole${index}`);

for (i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
            if (dead.textContent == 3) {
                alert("Вы выиграли!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;
        }
    }

}