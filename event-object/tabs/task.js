const tabs = Array.from(document.querySelectorAll(".tab"));
const tabscont = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((item, i) => {
    item.onclick = () => {
        for (let j in tabs) {
            tabs[j].classList.remove("tab_active");
            tabscont[j].classList.remove("tab__content_active");
        }

        tabs[i].classList.add("tab_active");
        tabscont[i].classList.add("tab__content_active");
        return;
    }
})