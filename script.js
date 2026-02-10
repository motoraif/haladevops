// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Animated Hero Background
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        resizeCanvas();
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();
        animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        init();
        animate();
    });
}

// Animated Why Us Background
const whyUsCanvas = document.getElementById('why-us-canvas');
if (whyUsCanvas) {
    const ctx = whyUsCanvas.getContext('2d');
    let waves = [];

    function resizeCanvas() {
        whyUsCanvas.width = whyUsCanvas.offsetWidth;
        whyUsCanvas.height = whyUsCanvas.offsetHeight;
    }

    class Wave {
        constructor(index) {
            this.index = index;
            this.amplitude = 30 + Math.random() * 20;
            this.frequency = 0.002 + Math.random() * 0.001;
            this.speed = 0.5 + Math.random() * 0.5;
            this.offset = Math.random() * Math.PI * 2;
            this.opacity = 0.1 + Math.random() * 0.1;
        }

        draw(time) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${this.opacity})`;
            ctx.lineWidth = 2;

            const yBase = whyUsCanvas.height * (0.3 + this.index * 0.15);
            
            for (let x = 0; x < whyUsCanvas.width; x += 5) {
                const y = yBase + Math.sin(x * this.frequency + time * this.speed + this.offset) * this.amplitude;
                
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            
            ctx.stroke();
        }
    }

    function init() {
        resizeCanvas();
        waves = [];
        for (let i = 0; i < 4; i++) {
            waves.push(new Wave(i));
        }
    }

    let startTime = Date.now();
    function animate() {
        const time = (Date.now() - startTime) * 0.001;
        ctx.clearRect(0, 0, whyUsCanvas.width, whyUsCanvas.height);
        
        waves.forEach(wave => wave.draw(time));
        
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        init();
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Animated counter for stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (stat.textContent === '0') {
                    animateCounter(stat);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Fade in animation on scroll
const fadeElements = document.querySelectorAll('.service-card, .course-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Form submission tracking
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Track form submission with Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'event_category': 'Contact',
                'event_label': 'Contact Form'
            });
        }
    });
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-cta').forEach(button => {
    button.addEventListener('click', (e) => {
        if (typeof gtag !== 'undefined') {
            const buttonText = e.target.textContent.trim();
            gtag('event', 'cta_click', {
                'event_category': 'Engagement',
                'event_label': buttonText
            });
        }
    });
});
