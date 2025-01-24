document.addEventListener('DOMContentLoaded', function () {
    // Инициализация AOS (Animate On Scroll)
    AOS.init();

    // Обработка клика на секцию "О себе"
    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('click', function () {
        alert('Ты кликнула на раздел "О себе"!');
    });

    // Обработка наведения на категории навыков
    const skillsCategories = document.querySelectorAll('.skills-category');
    skillsCategories.forEach(category => {
        category.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f9f9f9';
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });

        category.addEventListener('mouseout', function () {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'scale(1)';
        });
    });

    // Обработка бургер-меню
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', function () {
        // Переключаем класс "active" для меню
        navLinks.classList.toggle('active');

        // Анимация бургер-меню
        burgerMenu.classList.toggle('change');
    });

    // Закрытие меню при клике вне его области (опционально)
    document.addEventListener('click', function (event) {
        const isClickInsideBurger = burgerMenu.contains(event.target);
        const isClickInsideNav = navLinks.contains(event.target);

        if (!isClickInsideBurger && !isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burgerMenu.classList.remove('change');
        }
    });
});
