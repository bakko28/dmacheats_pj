const catalogBtn = document.querySelectorAll('#catalogBtn');

catalogBtn.forEach(btn => {
    btn.onclick = function() {
        window.location.href = 'catalog.html';
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

    let telegramUrl = "https://api.telegram.org/bot7009063337:AAG9VjfcPV07j1yBSd-4TM8O5-HSuqRBoH4/sendMessage?chat_id=902559946&text=" + encodeURIComponent(text);

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