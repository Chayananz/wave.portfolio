document.addEventListener('DOMContentLoaded', () => {

    // ========== Smooth Parallax with requestAnimationFrame ==========
    const sections = document.querySelectorAll('.section');
    let ticking = false;

    function updateParallax() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const speed = parseFloat(section.getAttribute('data-speed')) || 0.5;
            const yPos = -(scrollY * speed);
            section.style.backgroundPositionY = `${yPos}px`;
        });
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    // ========== IntersectionObserver for fade animations ==========
    const animElements = document.querySelectorAll(
        '.fade-in, .fade-up, .fade-in-delay, .fade-in-delay-2, .fade-up-delay, .fade-up-delay-2, .fade-up-delay-3'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    });

    animElements.forEach(el => observer.observe(el));

    // ========== Hero animations on load ==========
    const heroElements = document.querySelectorAll(
        '.hero .fade-in, .hero .fade-in-delay, .hero .fade-in-delay-2'
    );

    setTimeout(() => {
        heroElements.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150);
        });
    }, 200);

    // ========== Smooth scroll for anchor links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ========== Skill bar animation on scroll ==========
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        bar.style.width = width;
                    });
                });
                skillsObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillsObserver.observe(bar));

    // ========== Form submission ==========
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

});
