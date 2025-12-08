// RoboYuwa - Animation Effects

// ===================================
// Scroll Reveal Animations
// ===================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.mission-card, .program-card, .project-card, .event-card, .section-header'
    );
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        revealElements.forEach(el => {
            el.classList.add('revealed');
        });
    }
}

// Add reveal styles
const revealStyles = document.createElement('style');
revealStyles.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .mission-card.reveal,
    .program-card.reveal,
    .project-card.reveal {
        transition-delay: calc(var(--delay, 0) * 0.15s);
    }
    
    @media (prefers-reduced-motion: reduce) {
        .reveal {
            transition: none;
            opacity: 1;
            transform: none;
        }
    }
`;
document.head.appendChild(revealStyles);

// Add staggered delays to grid items
function addStaggerDelay() {
    const grids = document.querySelectorAll('.mission-grid, .programs-grid, .projects-grid');
    
    grids.forEach(grid => {
        const items = grid.querySelectorAll('.mission-card, .program-card, .project-card');
        items.forEach((item, index) => {
            item.style.setProperty('--delay', index);
        });
    });
}

// ===================================
// Parallax Effect
// ===================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-bg, .hero-visual');
    
    if (parallaxElements.length) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(el => {
                const speed = el.dataset.speed || 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// ===================================
// Magnetic Button Effect
// ===================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-donate');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// ===================================
// Cursor Trail Effect (Optional)
// ===================================
function initCursorTrail() {
    // Only on desktop
    if (window.innerWidth < 768) return;
    
    const canvas = document.createElement('canvas');
    canvas.id = 'cursorCanvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    let mouse = { x: 0, y: 0 };
    
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.life = 100;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 2;
            if (this.size > 0.1) this.size -= 0.1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 163, 255, ${this.life / 100})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
        
        for (let i = 0; i < 3; i++) {
            particles.push(new Particle(mouse.x, mouse.y));
        }
    });
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            
            if (particle.life <= 0) {
                particles.splice(index, 1);
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ===================================
// Text Typing Effect
// ===================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===================================
// Hover Tilt Effect for Cards
// ===================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.mission-card, .program-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ===================================
// Glowing Button Effect
// ===================================
function initGlowEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-donate');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Add glow effect styles
const glowStyles = document.createElement('style');
glowStyles.textContent = `
    .btn-primary, .btn-donate {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .btn-primary::before, .btn-donate::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        top: var(--mouse-y, 50%);
        left: var(--mouse-x, 50%);
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
    
    .btn-primary:hover::before, .btn-donate:hover::before {
        opacity: 1;
    }
`;
document.head.appendChild(glowStyles);

// ===================================
// Number Counter with Easing
// ===================================
function easeOutQuad(t) {
    return t * (2 - t);
}

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        
        const current = Math.floor(start + (end - start) * easedProgress);
        element.textContent = current + '+';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ===================================
// Background Particle Effect
// ===================================
function initParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    hero.querySelector('.hero-bg').appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class BackgroundParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
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
            ctx.fillStyle = 'rgba(0, 163, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new BackgroundParticle());
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 163, 255, ${0.2 - distance / 500})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    window.addEventListener('resize', () => {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    });
}

// ===================================
// Text Scramble Effect
// ===================================
function scrambleText(element) {
    const text = element.textContent;
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let iteration = 0;
    
    const interval = setInterval(() => {
        element.textContent = text
            .split('')
            .map((char, index) => {
                if (index < iteration) {
                    return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if (iteration >= text.length) {
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
}

// Apply to headings on hover
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseenter', function() {
        scrambleText(this);
    });
});

// ===================================
// Initialize All Animations
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    addStaggerDelay();
    initParallax();
    initTiltEffect();
    initGlowEffect();
    initParticleBackground();
    initMagneticButtons();
    
    // Optional: Enable cursor trail (can be performance-intensive)
    // initCursorTrail();
});

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
    
    // Animate hero on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});
