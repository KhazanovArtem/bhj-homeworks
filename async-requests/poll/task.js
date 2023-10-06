const card = document.querySelector(".card");

function poll(array) {
    const poll = document.createElement('div');
    poll.classList.add('poll');
    const title = document.createElement('div');
    title.classList.add('poll__title');
    title.setAttribute('id', 'poll__title');
    title.textContent = array.data.title;
    const answers = document.createElement('div');
    answers.classList.add('poll__answers');
    answers.classList.add('poll__answers_active');
    answers.setAttribute('id', 'poll__answers');
    const pollanswers = array.data.answers;
    for (i in pollanswers) {
        const btn = document.createElement('button');
        btn.classList.add('poll__answer');
        btn.textContent = pollanswers[i];
        answers.appendChild(btn);
    }
    card.appendChild(poll);
    poll.appendChild(title);
    poll.appendChild(answers);
}

function stat(array) {
    const answers = document.querySelector('.poll__answers');
    answers.classList.remove('poll__answers_active');
    for (i in array.stat) {
        const stat = document.createElement('div');
        stat.classList.add('stat');
        const answ = document.createElement('div');
        answ.classList.add('stat_answer');
        answ.textContent = array.stat[i].answer;
        const count = document.createElement('div');
        count.classList.add('stat_count');
        count.textContent = ': ' + array.stat[i].votes;
        card.appendChild(stat);
        stat.appendChild(answ);
        stat.appendChild(count);
    }

}


xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        poll(xhr.response);

        const btn = document.querySelectorAll('.poll__answer');
        btn.forEach((item, index) => {
            item.onclick = () => {
                alert('Спасибо, ваш голос засчитан!');
                const xhrp = new XMLHttpRequest;
                xhrp.addEventListener('readystatechange', () => {
                    if (xhrp.readyState == xhrp.DONE) {
                        stat(xhrp.response);
                    }
                })
                xhrp.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                xhrp.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrp.responseType = 'json';
                xhrp.send( 'vote=' + xhr.response.id + '&answer=' + index );
            }
        })

    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();