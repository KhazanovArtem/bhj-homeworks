const form = document.querySelector("form");
const tasks = document.querySelector(".tasks__list");
const input = document.getElementById('task__input');

form.addEventListener('submit', e => {
    e.preventDefault();
    input.value = input.value.trim();
    if (!input.value) {
        return;
    }
    const task = document.createElement('div');
    task.classList.add('task');
    const title = document.createElement('div');
    title.classList.add('task__title');
    title.textContent = input.value;
    const remove = document.createElement('a');
    remove.setAttribute('href', '#');
    remove.classList.add('task__remove');
    remove.textContent = '×';
    remove.addEventListener('click', () => {
        task.remove();
    })
    task.appendChild(title);
    task.appendChild(remove);
    tasks.appendChild(task);
    form.reset();
})
