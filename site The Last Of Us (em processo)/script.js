// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');


menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav ul li a');


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});


// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
       
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
       
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});


// Efeito de scroll no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.background = 'var(--primary-color)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});


// Animação ao rolar a página (Intersection Observer)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.story-content, .character-card, .game-item, .gallery-item');
   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
   
    elements.forEach(element => {
        observer.observe(element);
    });
};


// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});
