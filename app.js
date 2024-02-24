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