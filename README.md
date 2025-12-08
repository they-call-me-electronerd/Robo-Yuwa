# RoboYuwa Website

A modern, responsive, and SEO-optimized website for RoboYuwa — a nonprofit NGO empowering Nepal's youth through Robotics, AI, and IoT education.

## ✨ New! Enhanced Features

🎉 **Major Update**: The website now includes **advanced CSS animations** and **interactive JavaScript features**!

### What's New
- ✅ 15+ professional animations (slide, scale, rotate, glow, shimmer)
- ✅ 14 interactive features (parallax, 3D tilt, magnetic buttons, toast notifications)
- ✅ Glass morphism effects
- ✅ Custom cursor (desktop)
- ✅ Scroll progress indicator
- ✅ Advanced counter animations
- ✅ Theme switcher (dark/light mode)
- ✅ Accordion system
- ✅ And much more!

**📺 [View Live Demo](http://localhost:5173/demo.html)** | **📖 [Feature Documentation](./FEATURES.md)** | **⚡ [Quick Reference](./QUICKREF.md)**

---

## 🚀 Features

- **Modern Design**: Futuristic tech-themed design with clean UI/UX
- **Fully Responsive**: Mobile-first approach, works perfectly from 320px to 4K
- **SEO Optimized**: Semantic HTML, meta tags, structured data (Schema.org)
- **Performance**: Lazy loading, optimized assets, Lighthouse score 90+
- **Interactive**: Smooth animations, lightbox gallery, modals, form validation
- **Accessible**: WCAG AA compliant, keyboard navigable
- **Enhanced**: Professional animations and interactive effects

## 📁 Project Structure

```
roboyuwa-website/
├── index.html              # Home page
├── about.html              # About Us page
├── programs.html           # Programs page
├── events.html             # Events page
├── projects.html           # Projects page
├── blog.html               # Blog page
├── contact.html            # Contact page
├── demo.html               # ⭐ NEW: Features demo page
├── src/
│   ├── styles/
│   │   └── main.css        # Tailwind CSS + custom styles (ENHANCED)
│   └── js/
│       ├── main.js         # Entry point (ENHANCED)
│       └── utils.js        # JS utilities (ENHANCED)
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── FEATURES.md             # ⭐ NEW: Complete feature documentation
├── QUICKREF.md             # ⭐ NEW: Quick reference card
├── ENHANCEMENTS.md         # ⭐ NEW: Enhancement summary
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with advanced animations
- **Tailwind CSS** - Utility-first framework
- **JavaScript (ES6+)** - Interactive functionality
- **Vite** - Build tool and dev server

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: `#0F172A` (Deep navy)
- **Accent**: `#00A3FF` (Electric blue)
- **Secondary**: `#7C3AED` (Violet)
- **Success**: `#06D6A0` (Teal)
- **Neutral**: `#F8FAFC` (Off-white)

### Typography
- **Headings**: Inter (Google Fonts)
- **Body**: Roboto (Google Fonts)

### Components
- Buttons (Primary, Secondary, Outline, Success)
- Cards (Light, Dark)
- Forms (Input fields, Textareas, Validation)
- Modals & Lightboxes
- Navigation (Desktop & Mobile)

## ✨ Features Implementation

### JavaScript Functionality
- ✅ Mobile menu toggle
- ✅ Smooth scrolling
- ✅ Sticky header
- ✅ Scroll animations (IntersectionObserver)
- ✅ Image lightbox
- ✅ Event registration modals
- ✅ Project filtering
- ✅ Form validation
- ✅ Newsletter subscription
- ✅ Counter animations

### SEO Features
- ✅ Semantic HTML5 structure
- ✅ Meta tags (title, description, OG)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Lazy loading images
- ✅ Alt text for all images
- ✅ Canonical URLs

## 📱 Pages

1. **Home** - Hero, features, programs preview, CTA, newsletter
2. **About** - Mission/vision, values, team, partners
3. **Programs** - Robotics, AI, IoT courses, mentorship
4. **Events** - Upcoming events with registration
5. **Projects** - Student project gallery with filters
6. **Blog** - Articles, tutorials, tech news
7. **Contact** - Contact form, map, get involved options

## 🚀 Deployment

### Using Vercel
```bash
npm install -g vercel
vercel
```

### Using Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Using GitHub Pages
```bash
npm run build
# Upload 'dist' folder contents
```

## 📊 Performance

Target metrics:
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100

## 🔧 Customization

### Update Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YourColor',
      accent: '#YourColor',
      // ...
    }
  }
}
```

### Add Pages
1. Create new HTML file
2. Add to `vite.config.js` build input
3. Update navigation in all pages
4. Add to sitemap.xml

## 📝 License

MIT License - feel free to use for your projects

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

**RoboYuwa**
- Email: info@roboyuwa.org
- Website: https://roboyuwa.org
- Location: Kathmandu, Nepal

---

Built with ❤️ for empowering Nepal's youth through technology education
