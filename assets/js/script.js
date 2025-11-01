// Navbar visibility on scroll
window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('hero');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = heroSection.offsetHeight;

        // Mostrar navbar cuando se hace scroll más allá del hero
        if (currentScroll > heroHeight - 100) {
            navbar.classList.add('visible');
            navbar.style.position = 'fixed';
        } else {
            navbar.classList.remove('visible');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll para los enlaces del navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - (navbar.offsetHeight || 0);
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
