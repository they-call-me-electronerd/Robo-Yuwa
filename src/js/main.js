import '../styles/main.css';
import {
  initMobileMenu,
  initSmoothScroll,
  initStickyHeader,
  initScrollAnimations,
  initLightbox,
  initModal,
  initProjectFilter,
  initFormValidation,
  initLazyLoading,
  initCounterAnimation,
  initNewsletter,
  // Enhanced features
  initParallax,
  initScrollProgress,
  initCursorEffect,
  initTypingEffect,
  initTiltEffect,
  initMagneticButtons,
  initAdvancedCounter,
  initRippleEffect,
  initThemeSwitcher,
  initInfiniteScroll,
  initCopyToClipboard,
  initAccordion,
  initToast,
  initBackToTop,
  // ESP32 features
  initESP32Interaction
} from './utils.js';

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Core features
  initMobileMenu();
  initSmoothScroll();
  initStickyHeader();
  initScrollAnimations();
  initLightbox();
  initModal();
  initProjectFilter();
  initFormValidation();
  initLazyLoading();
  initCounterAnimation();
  initNewsletter();
  
  // Enhanced features
  initParallax();
  initScrollProgress();
  // initCursorEffect(); // Disabled custom cursor
  initTypingEffect();
  initTiltEffect();
  initMagneticButtons();
  initAdvancedCounter();
  initRippleEffect();
  initThemeSwitcher();
  initInfiniteScroll();
  initCopyToClipboard();
  initAccordion();
  initToast();
  initBackToTop();
  
  // ESP32 interactive effects
  initESP32Interaction();
  
  console.log('🚀 RoboYuwa: All features initialized successfully!');
});
