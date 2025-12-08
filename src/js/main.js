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
  initNewsletter
} from './utils.js';

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
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
});
