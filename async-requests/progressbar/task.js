const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress',(event) => {
        setTimeout(() => {
            progress.value = event.loaded/event.total;
        }, 1000);
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);    
    xhr.send(formData);
})

