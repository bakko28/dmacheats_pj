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

const leftBtn = document.getElementById('leftButton');
const rightBtn = document.getElementById('rightButton');

document.getElementById("telegramForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    let telegram = document.getElementById("telegram").value;
    let name = document.getElementById("name").value;

    let text = "Телеграм: " + telegram + "\nИмя: " + name;

    var telegramUrl = "https://api.telegram.org/bot7122079884:AAHXd98FRmrHMf7mqHwysxza0Hs_6930yWE/sendMessage?chat_id=741962421&text=" + encodeURIComponent(text);

    fetch(telegramUrl, { method: "GET" })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('Ваше сообщение успешно отправлено!');
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        alert('Произошла ошибка при отправке сообщения. Попробуйте еще раз.');
    });
});