const element = document.querySelectorAll(".reveal");

function VisibleElement(el) {

    for (i = 0; i < el.length; i++) {

        const {top, bottom} = el[i].getBoundingClientRect();
        if (bottom > 0 && top < innerHeight) {
            el[i].classList.add("reveal_active");
            return;
        }
    
        el[i].classList.remove("reveal_active");
    }
}

setInterval(() => {
    VisibleElement(element);
}, 1000)