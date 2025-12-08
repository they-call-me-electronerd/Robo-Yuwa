# RoboYuwa - Quick Reference Card

## 🎨 CSS Classes Cheat Sheet

### Animations
```html
<!-- Entrance Animations -->
<div class="fade-in animate-slide-left">   <!-- Slide from left -->
<div class="fade-in animate-slide-right">  <!-- Slide from right -->
<div class="fade-in animate-slide-up">     <!-- Slide from bottom -->
<div class="fade-in animate-scale">        <!-- Scale in -->
<div class="fade-in animate-rotate">       <!-- Rotate in -->

<!-- Continuous Animations -->
<div class="animate-float">          <!-- Float up/down -->
<div class="animate-pulse-slow">     <!-- Slow pulsing -->
<div class="animate-shimmer">        <!-- Shimmer effect -->
<div class="animate-glow">           <!-- Glowing -->
<div class="animate-gradient">       <!-- Gradient shift -->
<div class="animate-bounce-subtle">  <!-- Subtle bounce -->
<div class="animate-pulse-ring">     <!-- Pulse ring -->
```

### Cards & Effects
```html
<!-- Basic Cards -->
<div class="card">              <!-- White card with shadow -->
<div class="card-dark">         <!-- Dark card -->

<!-- Hover Effects -->
<div class="card hover-lift">   <!-- Lifts on hover -->
<div class="btn hover-glow">    <!-- Glows on hover -->
<div class="hover-scale">       <!-- Scales on hover -->
<div class="hover-rotate">      <!-- Rotates on hover -->

<!-- Glass Morphism -->
<div class="glass">             <!-- Light glass effect -->
<div class="glass-dark">        <!-- Dark glass effect -->

<!-- Gradient Border -->
<div class="gradient-border p-8">  <!-- Animated gradient border -->
```

### Text Effects
```html
<h1 class="gradient-text">      <!-- Gradient text -->
<h1 class="neon-text">          <!-- Neon glow text -->
<p class="text-shadow">         <!-- Text with shadow -->
```

### Backgrounds
```html
<section class="bg-pattern">    <!-- Gradient pattern -->
<section class="bg-grid">       <!-- Grid pattern -->
<section class="particle-bg">   <!-- Particle background -->
```

### Buttons
```html
<button class="btn-primary">    <!-- Primary button -->
<button class="btn-secondary">  <!-- Secondary button -->
<button class="btn-outline">    <!-- Outline button -->
<button class="btn-success">    <!-- Success button -->
```

### Loading States
```html
<div class="skeleton h-4 w-full">     <!-- Skeleton loader -->
<div class="progress-bar">            <!-- Progress bar -->
```

### Tooltips
```html
<button class="tooltip" data-tooltip="Hint text">
  Hover me
</button>
```

---

## ⚡ JavaScript Data Attributes

### Parallax
```html
<div data-parallax="0.5">  <!-- 0.5 = speed (0-1) -->
```

### Typing Effect
```html
<h1 data-typing data-typing-speed="100">
  Text to type
</h1>
```

### 3D Tilt
```html
<div data-tilt>  <!-- Card follows mouse in 3D -->
```

### Magnetic Button
```html
<button data-magnetic>  <!-- Button follows cursor -->
```

### Counter Animation
```html
<span data-counter-advanced="5000" 
      data-duration="2000" 
      data-prefix="$" 
      data-suffix="+">
  0
</span>
```

### Ripple Effect
```html
<button data-ripple>  <!-- Click ripple animation -->
```

### Copy to Clipboard
```html
<button data-copy="Text to copy">
  Copy
</button>
```

### Accordion
```html
<div data-accordion-group>
  <div data-accordion-header>Question</div>
  <div style="max-height: 0;">Answer</div>
</div>
```

### Modal
```html
<!-- Trigger -->
<button data-modal-open="my-modal">Open</button>

<!-- Modal -->
<div data-modal="my-modal" class="hidden">
  <button data-modal-close>Close</button>
</div>
```

### Lightbox
```html
<img src="..." data-lightbox>  <!-- Click to open fullscreen -->
```

### Project Filter
```html
<!-- Filter buttons -->
<button data-filter="all">All</button>
<button data-filter="robotics">Robotics</button>

<!-- Items -->
<div data-category="robotics">Item</div>
```

### Newsletter Form
```html
<form data-newsletter>
  <input type="email" required>
  <div class="newsletter-success hidden">Success!</div>
</form>
```

### Form Validation
```html
<form data-validate>
  <input type="email" required>
  <span class="error-message hidden">Error</span>
</form>
```

### Load More
```html
<button data-load-more 
        data-container="#items" 
        data-auto-load="true">
  Load More
</button>
```

### Theme Toggle
```html
<button data-theme-toggle>🌙</button>
```

---

## 🔧 JavaScript Functions

### Toast Notifications
```javascript
showToast('Message', 'success', 3000);
showToast('Message', 'error', 3000);
showToast('Message', 'warning', 3000);
showToast('Message', 'info', 3000);
```

### Auto-Initialized Features
- ✅ Mobile menu
- ✅ Smooth scroll
- ✅ Sticky header
- ✅ Scroll animations
- ✅ Lazy loading
- ✅ Back to top button
- ✅ Scroll progress bar
- ✅ Custom cursor (desktop)

---

## 📐 Tailwind Custom Classes

### Colors
```
primary: #0F172A (dark blue)
accent: #00A3FF (electric blue)
secondary: #7C3AED (violet)
success: #06D6A0 (green)
neutral: #F8FAFC (light gray)
muted: #64748B (medium gray)
```

### Spacing
```
rounded-card: 1rem
rounded-pill: 9999px
shadow-card: custom shadow
```

### Fonts
```
font-heading: Inter
font-body: Roboto
```

---

## 🎯 Common Patterns

### Hero Section
```html
<section class="particle-bg relative overflow-hidden">
  <div data-parallax="0.3">Background</div>
  <div class="relative z-10">
    <h1 data-typing>Title</h1>
    <button class="btn-primary" data-magnetic data-ripple>
      CTA
    </button>
  </div>
</section>
```

### Feature Card
```html
<div class="card hover-lift fade-in" data-tilt>
  <div class="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl animate-glow">
    Icon
  </div>
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### Stats Counter
```html
<div class="text-center">
  <div class="text-5xl font-bold gradient-text" 
       data-counter-advanced="5000" 
       data-suffix="+">
    0
  </div>
  <p>Label</p>
</div>
```

### Glass Card
```html
<div class="glass p-8 rounded-2xl">
  <h3>Title</h3>
  <p>Content</p>
  <button class="btn-primary" data-ripple>
    Action
  </button>
</div>
```

---

## 🚀 Performance Tips

1. **Use `fade-in` for scroll-triggered animations** - automatically observed
2. **Limit parallax elements** - max 3-5 per page
3. **Use `data-tilt` sparingly** - computationally expensive
4. **Combine effects wisely** - don't overload a single element
5. **Test on real devices** - DevTools doesn't show true performance

---

## 📱 Responsive Behavior

- Custom cursor: Desktop only
- Tilt effects: Reduced on mobile
- Parallax: Disabled on small screens (if desired)
- All animations: Respect `prefers-reduced-motion`

---

## 🐛 Debugging

```javascript
// Check if feature initialized
console.log('Features loaded');  // Should appear in console

// Test toast
showToast('Test', 'info');

// Check for errors
// Open DevTools Console (F12)
```

---

**For complete documentation, see FEATURES.md**
