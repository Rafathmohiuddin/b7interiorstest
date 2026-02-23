document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length > 0 && dots.length > 0) {
        let currentTestimonial = 0;

        window.setTestimonial = function(index) {
            testimonials[currentTestimonial].classList.remove('active');
            dots[currentTestimonial].classList.remove('active');
            
            currentTestimonial = index;
            
            testimonials[currentTestimonial].classList.add('active');
            dots[currentTestimonial].classList.add('active');
        };

        // Auto slide testimonials
        setInterval(() => {
            let next = (currentTestimonial + 1) % testimonials.length;
            window.setTestimonial(next);
        }, 5000);
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all
                faqItems.forEach(faq => faq.classList.remove('active'));
                
                // Open clicked if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
});
