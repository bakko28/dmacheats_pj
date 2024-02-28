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

leftBtn.addEventListener('click', function() {
        // Получаем ссылки на изображения
        const img1 = document.getElementById('cardImg1');
        const img2 = document.getElementById('cardImg2');
        const img3 = document.getElementById('cardImg3');

        // Получаем свойства изображений
        let img1Style = window.getComputedStyle(img1);
        let img2Style = window.getComputedStyle(img2);
        let img3Style = window.getComputedStyle(img3);

        // Меняем свойства изображений
        img3.style.cssText = img2Style.cssText;
        img2.style.cssText = img1Style.cssText;
        img1.style.cssText = img3Style.cssText;
    });


