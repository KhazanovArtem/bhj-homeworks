const loader = document.getElementById("loader");
const items = document.getElementById("items");

function convertCourses(array) {
    loader.classList.toggle('loader_active');
    const valutes = array.response.Valute;
    for (i in valutes) {
        const item = document.createElement('div');
        item.classList.add('item');
        const code = document.createElement('div');
        code.classList.add('item__code');
        code.textContent = valutes[i].CharCode;
        const value = document.createElement('div');
        value.classList.add('item__value');
        value.textContent = valutes[i].Value;
        const curr = document.createElement('div');
        curr.classList.add('item__currency');
        curr.textContent = "руб.";
        item.appendChild(code);
        item.appendChild(value);
        item.appendChild(curr);
        items.appendChild(item);

    }
}

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        convertCourses(xhr.response);
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();