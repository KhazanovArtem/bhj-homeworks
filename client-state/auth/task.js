const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');

const storedId = localStorage.getItem('userid');

if (storedId) {
    welcomeUser(storedId);
}

function welcomeUser(id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    const userid = document.getElementById('user_id');
    userid.textContent = id;
}



form.addEventListener('submit', e => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
            const answer = JSON.parse(xhr.response);

            if (answer.success) {
                localStorage.setItem('userid', answer.user_id);
                welcomeUser(answer.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const dataform = new FormData(form);
    xhr.send(dataform);
})