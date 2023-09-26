const fontbank = document.getElementsByClassName("book__control_font-size");
const font = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");


font.forEach((el,index) => {
    el.onclick = () => {
        for(j in font) {
            font[j].classList.remove("font-size_active");
        }
        el.classList.add("font-size_active");

        if (index == 0) {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        }
        if (index == 1) {
            book.classList.remove("book_fs-big");
            book.classList.remove("book_fs-small");
        }
        if (index == 2) {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        }
        return false;
    }
})

