const currentValue = document.querySelector(".dropdown__value");
const openlist = document.querySelector(".dropdown__list");
const arrayValues = Array.from(document.querySelectorAll('.dropdown__item'));

function openList() {
    openlist.classList.add("dropdown__list_active")
}
currentValue.addEventListener("click",openList);

arrayValues.forEach((item, i) =>{
    item.onclick = () => {
        currentValue.textContent = arrayValues[i].textContent;
        openlist.classList.remove("dropdown__list_active")
        return false;
    }
})

