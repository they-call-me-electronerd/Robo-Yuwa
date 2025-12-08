/* ===================================
   RoboYuwa - Modern Theme JavaScript
   Enhanced Interactions & Theme Toggle
   =================================== */

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme();
        this.createToggleButton();
        this.setupEventListeners();
    }

    applyTheme() {
        if (this.theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
        this.updateToggleIcon();
    }

    createToggleButton() {
        const toggle = document.createElement('button');
        toggle.className = 'theme-toggle';
        toggle.setAttribute('aria-label', 'Toggle theme');
        toggle.innerHTML = this.getIcon();
        document.body.appendChild(toggle);
        this.toggleButton = toggle;
    }

    getIcon() {
        return this.theme === 'dark' 
            ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
               </svg>`;
    }

    updateToggleIcon() {
        if (this.toggleButton) {
            this.toggleButton.innerHTML = this.getIcon();
        }
    }

    setupEventListeners() {
        // Toggle button click
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-toggle')) {
                this.toggleTheme();
            }
        });

        // Keyboard accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 't' && e.ctrlKey) {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }
}

// Navigation Manager
class NavigationManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.setupScrollEffect();
        this.setupMobileMenu();
        this.setupActiveLink();
        this.setupSmoothScroll();
    }

    setupScrollEffect() {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            // Hide navbar on scroll down, show on scroll up
            if (currentScroll > lastScroll && currentScroll > 500) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });
    }

    setupMobileMenu() {
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => {
                this.navToggle.classList.toggle('active');
                this.navMenu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar')) {
                    this.navToggle?.classList.remove('active');
                    this.navMenu?.classList.remove('active');
                }
            });

            // Close menu when clicking a link
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.navToggle?.classList.remove('active');
                    this.navMenu?.classList.remove('active');
                });
            });
        }
    }

    setupActiveLink() {
        // Highlight active section in navigation
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const scrollPos = window.pageYOffset + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    }
}

// Scroll Reveal Animation
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.glass-card, .hero-content, section > *');
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// Magnetic Button Effect
class MagneticButtons {
    constructor() {
        this.buttons = document.querySelectorAll('.btn, .nav-link');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Form Validation
class FormValidator {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });

            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
            });
        });
    }

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let errorMessage = '';

        // Remove previous error
        this.removeError(field);

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email';
            }
        } else if (type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        }

        return isValid;
    }

    showError(field, message) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ff6b6b;
            font-size: 0.875rem;
            margin-top: 0.5rem;
            animation: fadeIn 0.3s ease;
        `;
        field.parentNode.appendChild(errorDiv);
    }

    removeError(field) {
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }

    init() {
        if (this.elements.length === 0) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            this.elements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Notification System
class NotificationManager {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 16px;
        `;
        document.body.appendChild(container);
        return container;
    }

    show(message, type = 'info', duration = 4000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };

        notification.style.cssText = `
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-left: 4px solid ${colors[type]};
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: var(--shadow-xl);
            color: var(--current-text-primary);
            min-width: 300px;
            animation: slideInRight 0.3s ease;
            cursor: pointer;
        `;

        notification.textContent = message;
        this.container.appendChild(notification);

        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, duration);

        // Click to dismiss
        notification.addEventListener('click', () => {
            notification.remove();
        });
    }
}

// Counter Animation
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('[data-count]');
        this.init();
    }

    init() {
        if (this.counters.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }
}

// Loading Animation
class LoadingManager {
    constructor() {
        this.createLoader();
    }

    createLoader() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--current-bg-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        `;

        loader.innerHTML = `
            <div style="
                width: 60px;
                height: 60px;
                border: 4px solid var(--glass-border);
                border-top-color: var(--accent-primary);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
        `;

        document.body.appendChild(loader);

        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 500);
        });
    }
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    const themeManager = new ThemeManager();
    const navigationManager = new NavigationManager();
    const loadingManager = new LoadingManager();
    
    // Visual effects
    const scrollReveal = new ScrollReveal();
    const magneticButtons = new MagneticButtons();
    const parallaxEffect = new ParallaxEffect();
    const counterAnimation = new CounterAnimation();
    
    // User interactions
    const formValidator = new FormValidator();
    window.notify = new NotificationManager();
    
    // Expose notification to global scope
    window.showNotification = (message, type, duration) => {
        window.notify.show(message, type, duration);
    };

    console.log('🚀 RoboYuwa - Modern theme initialized');
});

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ThemeManager,
        NavigationManager,
        NotificationManager
    };
}
