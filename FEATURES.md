# RoboYuwa - Enhanced Features Documentation

## 🎨 Advanced CSS Features

### 1. **Animation Library**

#### Slide Animations
```html
<div class="fade-in animate-slide-left">Slides in from left</div>
<div class="fade-in animate-slide-right">Slides in from right</div>
<div class="fade-in animate-slide-up">Slides in from bottom</div>
```

#### Scale & Rotate
```html
<div class="fade-in animate-scale">Scales in</div>
<div class="fade-in animate-rotate">Rotates in</div>
```

#### Continuous Animations
```html
<div class="animate-float">Floating effect</div>
<div class="animate-pulse-slow">Slow pulse</div>
<div class="animate-shimmer">Shimmer effect</div>
<div class="animate-glow">Glowing effect</div>
<div class="animate-gradient">Animated gradient</div>
<div class="animate-bounce-subtle">Subtle bounce</div>
<div class="animate-pulse-ring">Pulse ring effect</div>
```

### 2. **Glass Morphism**
```html
<!-- Light glass effect -->
<div class="glass p-6 rounded-lg">
  Semi-transparent blurred background
</div>

<!-- Dark glass effect -->
<div class="glass-dark p-6 rounded-lg">
  Dark semi-transparent blurred background
</div>
```

### 3. **Gradient Borders**
```html
<div class="gradient-border p-8">
  Content with animated gradient border
</div>
```

### 4. **Hover Effects**
```html
<!-- Lift on hover -->
<div class="card hover-lift">Lifts up on hover</div>

<!-- Glow on hover -->
<button class="btn-primary hover-glow">Glows on hover</button>

<!-- Scale on hover -->
<img src="..." class="hover-scale">

<!-- Rotate on hover -->
<div class="card hover-rotate">Rotates slightly on hover</div>
```

### 5. **Neon Text Effect**
```html
<h1 class="neon-text">Glowing Neon Text</h1>
```

### 6. **Background Effects**
```html
<!-- Pattern background -->
<section class="bg-pattern">
  Subtle gradient pattern background
</section>

<!-- Grid background -->
<section class="bg-grid">
  Subtle grid background
</section>

<!-- Particle background -->
<section class="particle-bg">
  Animated floating particles
</section>
```

### 7. **Progress Bars**
```html
<div class="progress-bar" style="width: 250px;"></div>
```

### 8. **Skeleton Loading**
```html
<div class="skeleton h-4 w-full mb-2"></div>
<div class="skeleton h-4 w-3/4 mb-2"></div>
<div class="skeleton h-4 w-1/2"></div>
```

### 9. **Tooltips**
```html
<button class="tooltip" data-tooltip="Click me!">
  Hover for tooltip
</button>
```

### 10. **Custom Scrollbar**
Automatically styled with accent color. Works in Webkit browsers.

---

## ⚡ Enhanced JavaScript Features

### 1. **Parallax Scrolling**
```html
<div data-parallax="0.5">
  Moves at 50% scroll speed
</div>

<div data-parallax="0.3">
  Slower parallax effect
</div>
```

### 2. **Scroll Progress Indicator**
Automatically added to top of page. Shows reading progress.

### 3. **Custom Cursor Effect**
Interactive cursor that follows mouse and scales on hover (desktop only).

### 4. **Text Typing Effect**
```html
<h1 data-typing data-typing-speed="100">
  This text will type out automatically
</h1>
```

### 5. **3D Tilt Effect**
```html
<div class="card" data-tilt>
  Card tilts in 3D based on mouse position
</div>
```

### 6. **Magnetic Buttons**
```html
<button class="btn-primary" data-magnetic>
  Button follows cursor slightly
</button>
```

### 7. **Advanced Counter Animation**
```html
<span data-counter-advanced="5000" 
      data-duration="2000" 
      data-prefix="$" 
      data-suffix="+">
  0
</span>
```

### 8. **Ripple Effect**
```html
<button class="btn-primary" data-ripple>
  Click for ripple effect
</button>
```

### 9. **Theme Switcher**
```html
<button data-theme-toggle>
  Toggle Dark/Light Mode
</button>
```

### 10. **Infinite Scroll / Load More**
```html
<button data-load-more 
        data-container="#blog-posts" 
        data-auto-load="true">
  Load More
</button>
```

### 11. **Copy to Clipboard**
```html
<button data-copy="Text to copy">
  Copy to Clipboard
</button>
```

### 12. **Accordion**
```html
<div data-accordion-group>
  <div data-accordion-header class="cursor-pointer">
    Question 1
  </div>
  <div class="overflow-hidden transition-all duration-300" style="max-height: 0;">
    Answer 1
  </div>
  
  <div data-accordion-header class="cursor-pointer">
    Question 2
  </div>
  <div class="overflow-hidden transition-all duration-300" style="max-height: 0;">
    Answer 2
  </div>
</div>
```

### 13. **Toast Notifications**
```javascript
// Call from anywhere in your code
showToast('Success!', 'success', 3000);
showToast('Error occurred', 'error', 3000);
showToast('Warning message', 'warning', 3000);
showToast('Info message', 'info', 3000);
```

### 14. **Back to Top Button**
Automatically added with progress indicator. Appears after scrolling 300px.

---

## 🚀 Usage Examples

### Example 1: Hero Section with Parallax
```html
<section class="relative overflow-hidden particle-bg">
  <div data-parallax="0.3" class="absolute inset-0">
    <img src="background.jpg" alt="Background">
  </div>
  
  <div class="relative z-10">
    <h1 data-typing class="neon-text">
      Welcome to RoboYuwa
    </h1>
    <button class="btn-primary" data-magnetic data-ripple>
      Get Started
    </button>
  </div>
</section>
```

### Example 2: Interactive Card Grid
```html
<div class="grid md:grid-cols-3 gap-6">
  <div class="card hover-lift" data-tilt>
    <h3>Feature 1</h3>
    <p>Description</p>
  </div>
  
  <div class="card hover-lift" data-tilt>
    <h3>Feature 2</h3>
    <p>Description</p>
  </div>
  
  <div class="card hover-lift" data-tilt>
    <h3>Feature 3</h3>
    <p>Description</p>
  </div>
</div>
```

### Example 3: Stats Counter Section
```html
<section class="section">
  <div class="grid md:grid-cols-3 gap-8">
    <div class="text-center">
      <span class="text-5xl font-bold gradient-text" 
            data-counter-advanced="5000" 
            data-suffix="+">
        0
      </span>
      <p>Students Trained</p>
    </div>
    
    <div class="text-center">
      <span class="text-5xl font-bold gradient-text" 
            data-counter-advanced="150" 
            data-suffix="+">
        0
      </span>
      <p>Workshops</p>
    </div>
    
    <div class="text-center">
      <span class="text-5xl font-bold gradient-text" 
            data-counter-advanced="50" 
            data-suffix="+">
        0
      </span>
      <p>Projects</p>
    </div>
  </div>
</section>
```

### Example 4: Glass Morphism Card
```html
<div class="glass p-8 rounded-2xl backdrop-blur-xl">
  <h3 class="text-2xl font-bold mb-4">Modern Card</h3>
  <p class="text-gray-600 mb-6">
    Beautiful glass morphism effect
  </p>
  <button class="btn-primary" data-ripple>
    Learn More
  </button>
</div>
```

### Example 5: FAQ Accordion
```html
<div data-accordion-group class="space-y-4">
  <div class="border rounded-lg">
    <div data-accordion-header 
         class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50">
      <h4 class="font-semibold">What is RoboYuwa?</h4>
      <svg class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
    <div class="overflow-hidden transition-all duration-300" style="max-height: 0;">
      <div class="p-4 pt-0">
        RoboYuwa is a leading robotics and AI education platform in Nepal.
      </div>
    </div>
  </div>
  
  <div class="border rounded-lg">
    <div data-accordion-header 
         class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50">
      <h4 class="font-semibold">How can I enroll?</h4>
      <svg class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
    <div class="overflow-hidden transition-all duration-300" style="max-height: 0;">
      <div class="p-4 pt-0">
        Visit our Programs page and click "Enroll Now" on your preferred course.
      </div>
    </div>
  </div>
</div>
```

---

## 🎯 Performance Optimizations

All features use:
- **RequestAnimationFrame** for smooth 60fps animations
- **Intersection Observer** for scroll-triggered effects (lazy loading)
- **Event delegation** where applicable
- **Throttling/debouncing** for scroll and resize events
- **CSS transforms** instead of layout properties for better performance
- **Will-change** hints for complex animations

---

## 🌐 Browser Compatibility

- **Modern browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **IE11**: Not supported (uses modern CSS and JS features)
- **Mobile**: Fully responsive, touch-optimized

---

## 📱 Mobile Considerations

- Custom cursor effect disabled on mobile (data-attribute based)
- Tilt effects work with device orientation on mobile
- Touch-optimized ripple effects
- Reduced motion support via `prefers-reduced-motion`

---

## 🔧 Customization

### Modify Animation Speeds
Edit keyframes in `src/styles/main.css`:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); } /* Adjust this value */
}
```

### Change Colors
Update `tailwind.config.js` theme colors or CSS custom properties.

### Disable Features
Comment out unwanted initializations in `src/js/main.js`.

---

## 📊 Feature Summary

### CSS Enhancements
✅ 15+ animation keyframes  
✅ Glass morphism effects  
✅ Gradient borders  
✅ 8 hover effect variants  
✅ Neon text styling  
✅ Custom scrollbar  
✅ Progress indicators  
✅ Skeleton loaders  
✅ Tooltip system  
✅ Background patterns  

### JavaScript Enhancements
✅ Parallax scrolling  
✅ Scroll progress indicator  
✅ Custom cursor effect  
✅ Typing animation  
✅ 3D tilt effect  
✅ Magnetic buttons  
✅ Advanced counters  
✅ Ripple effects  
✅ Theme switcher  
✅ Infinite scroll  
✅ Copy to clipboard  
✅ Accordion system  
✅ Toast notifications  
✅ Back to top button  

---

## 💡 Tips

1. **Performance**: Don't add too many parallax/tilt elements on one page
2. **Accessibility**: Most effects respect `prefers-reduced-motion`
3. **Testing**: Test on actual devices for best results
4. **Customization**: All features are modular and can be toggled on/off
5. **Progressive Enhancement**: Core functionality works without JavaScript

---

## 🐛 Troubleshooting

### Animations not working?
- Ensure elements have the correct data attributes
- Check browser console for errors
- Verify Tailwind CSS is compiled properly

### Performance issues?
- Reduce number of animated elements
- Use `will-change` CSS property sparingly
- Consider lazy-loading heavy animations

### Mobile issues?
- Test with actual devices, not just DevTools
- Check touch event handling
- Verify viewport meta tag is present

---

**For more help, refer to the main README.md or open an issue on GitHub.**
