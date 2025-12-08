// Mobile Menu Toggle
export function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const body = document.body;

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      body.style.overflow = 'hidden';
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        body.style.overflow = '';
      });
    }

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        body.style.overflow = '';
      });
    });
  }
}

// Smooth Scrolling
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Sticky Header
export function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('shadow-lg', 'bg-white');
    } else {
      header.classList.remove('shadow-lg', 'bg-white');
    }
    
    lastScroll = currentScroll;
  });
}

// Intersection Observer for Animations
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Lightbox for Project Images
export function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const body = document.body;

  if (!lightbox || !lightboxImg) return;

  // Open lightbox
  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  const closeLightbox = () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    body.style.overflow = '';
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Modal for Event Registration
export function initModal() {
  const modals = document.querySelectorAll('[data-modal]');
  const body = document.body;

  modals.forEach(modal => {
    const modalId = modal.dataset.modal;
    const openButtons = document.querySelectorAll(`[data-modal-open="${modalId}"]`);
    const closeButtons = modal.querySelectorAll('[data-modal-close]');

    openButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        body.style.overflow = 'hidden';
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        body.style.overflow = '';
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        body.style.overflow = '';
      }
    });
  });
}

// Project Filter
export function initProjectFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-accent', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
      });
      button.classList.add('bg-accent', 'text-white');
      button.classList.remove('bg-gray-200', 'text-gray-700');

      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.classList.add('fade-in', 'active');
          }, 10);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// Form Validation
export function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required]');

      inputs.forEach(input => {
        const errorEl = input.nextElementSibling;
        
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('border-red-500');
          if (errorEl && errorEl.classList.contains('error-message')) {
            errorEl.classList.remove('hidden');
          }
        } else {
          input.classList.remove('border-red-500');
          if (errorEl && errorEl.classList.contains('error-message')) {
            errorEl.classList.add('hidden');
          }
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add('border-red-500');
            if (errorEl && errorEl.classList.contains('error-message')) {
              errorEl.textContent = 'Please enter a valid email';
              errorEl.classList.remove('hidden');
            }
          }
        }
      });

      if (isValid) {
        // Show success message
        const successMsg = form.querySelector('.success-message');
        if (successMsg) {
          successMsg.classList.remove('hidden');
          form.reset();
          setTimeout(() => {
            successMsg.classList.add('hidden');
          }, 5000);
        }
      }
    });
  });
}

// Lazy Loading Images
export function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback to Intersection Observer
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
}

// Counter Animation
export function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-counter]');

  const animateCounter = (counter) => {
    const target = parseInt(counter.dataset.counter);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

// Newsletter Form
export function initNewsletter() {
  const newsletterForms = document.querySelectorAll('[data-newsletter]');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      
      if (email) {
        // Show success message
        const successMsg = form.querySelector('.newsletter-success');
        if (successMsg) {
          successMsg.classList.remove('hidden');
          form.reset();
          setTimeout(() => {
            successMsg.classList.add('hidden');
          }, 5000);
        }
      }
    });
  });
}
