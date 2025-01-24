document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('click', function() {
        alert('Ты кликнула на раздел "О себе"!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillsCategories = document.querySelectorAll('.skills-category');

    skillsCategories.forEach(category => {
        category.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f9f9f9';
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });

        category.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', function() {
        // Переключаем класс "active" для меню
        navLinks.classList.toggle('active');

        // Анимация бургер-меню
        burgerMenu.classList.toggle('change');
    });
});
