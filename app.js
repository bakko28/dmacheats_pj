const catalogBtn = document.querySelectorAll('#catalogBtn');
const mainBtn = document.querySelectorAll('#mainPageBtn');

catalogBtn.forEach(btn => {
    btn.onclick = function() {
        window.location.href = 'catalog.html';
    };
});

mainBtn.forEach(btn => {
    btn.onclick = function () {
        window.location.href = 'index.html';
    };
});

const buyBtns = document.querySelectorAll('#buyBtn');

buyBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        let targetSection = document.querySelector('.application-box');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Целевой раздел не найден');
        }
    });
});

const technologyBtns = document.querySelectorAll('#technologyBtn');

technologyBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        let targetSection = document.querySelector('.technology-box');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Целевой раздел не найден');
        }
    });
});

const deliveryBtns = document.querySelectorAll('#deliveryBtn');

deliveryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        let targetSection = document.querySelector('.delivery-box');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Целевой раздел не найден');
        }
    });
});
const infoTitle1Box = document.querySelectorAll('.info-title1');
const infoTitle2Box = document.querySelectorAll('.info-title2');

const plus1Btn = document.querySelectorAll('.plus1');
const plus2Btn = document.querySelectorAll('.plus2');

plus1Btn.forEach(btn => {
    btn.addEventListener('click', () => {
        infoTitle1Box.forEach(box => {
            if (box.classList.contains('fade-in')) {
                box.classList.remove('fade-in');
                box.style.display = 'none';
            } else {
                box.classList.add('fade-in');
                box.style.display = 'block';
            }
        });
    });
});

plus2Btn.forEach(btn => {
    btn.addEventListener('click', () => {
        infoTitle2Box.forEach(box => {
            if (box.classList.contains('fade-in')) {
                box.classList.remove('fade-in');
                box.style.display = 'none';
            } else {
                box.classList.add('fade-in');
                box.style.display = 'block';
            }
        });
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('myForm');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const telegram = document.getElementById('telegram').value;
//         const name = document.getElementById('name').value;

//         console.log('Telegram:', telegram, '\nName:', name);

//         // Отправляем данные на сервер
//         fetch('/sendMessage', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ telegram, name })
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Ошибка отправки данных на сервер');
//             }
//             return response.text();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Произошла ошибка:', error);
//         });
//     });
// });