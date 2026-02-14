// Parallax Effect
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const speed = section.getAttribute('data-speed') || 0.5;
            const yPos = -(scrollY * speed);
            section.style.backgroundPosition = `center ${yPos}px`;
        });

        // Fade In Animations on Scroll
        const elements = document.querySelectorAll('.fade-in, .fade-up, .fade-in-delay, .fade-in-delay-2, .fade-up-delay, .fade-up-delay-2, .fade-up-delay-3');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });

            // Show success message (you can customize this)
            alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับเร็วๆ นี้');

            // Reset form
            contactForm.reset();
        });
    }

    // Initialize animations on page load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .fade-in, .hero .fade-in-delay, .hero .fade-in-delay-2');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);
});
