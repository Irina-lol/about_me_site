document.addEventListener('DOMContentLoaded', function () {
    // Инициализация AOS (Animate On Scroll)
    AOS.init();

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
    const overlay = document.createElement('div'); // Создаем элемент для затемнения фона
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    burgerMenu.addEventListener('click', function () {
        // Переключаем класс "active" для меню и затемнения фона
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        burgerMenu.classList.toggle('change');
    });

    // Закрытие меню при клике на затемнение или пункт меню
    overlay.addEventListener('click', function () {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        burgerMenu.classList.remove('change');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            burgerMenu.classList.remove('change');
        });
    });
});
