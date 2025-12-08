# RoboYuwa Website

A modern, professional website for RoboYuwa — a nonprofit NGO guiding Nepal's next generation in Robotics, AI, and IoT.

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI**: Clean, futuristic design with smooth animations
- **SEO Optimized**: Semantic HTML, meta tags, sitemap, and structured data
- **Performance**: Lazy loading, optimized CSS, and efficient JavaScript
- **Accessible**: WCAG AA compliance with keyboard navigation and ARIA labels
- **Interactive**: Dynamic forms, project filters, and smooth scrolling

## 📁 Project Structure

```
Robo-Yuwa/
├── index.html              # Homepage
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML sitemap for SEO
├── assets/
│   ├── images/            # Image files
│   └── icons/             # Icon files (favicon, etc.)
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── main.js            # Core functionality
│   └── animations.js      # Animation effects
└── pages/
    ├── about.html         # About page
    ├── programs.html      # Programs page
    ├── projects.html      # Projects showcase
    ├── events.html        # Events and registration
    ├── blog.html          # Blog and tutorials
    ├── contact.html       # Contact form
    ├── donate.html        # Donation page
    └── privacy.html       # Privacy policy
```

## 🎨 Design System

### Colors
- **Primary**: #0F172A (Navy)
- **Accent**: #00A3FF (Blue Neon)
- **Secondary**: #7C3AED (Violet)
- **Neutral Light**: #F8FAFC
- **Neutral Mid**: #64748B

### Typography
- **Headings**: Poppins
- **Body**: Roboto

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, animations, CSS variables
- **JavaScript**: Vanilla JS (no frameworks)
- **Google Fonts**: Poppins & Roboto

## 📋 Pages Overview

1. **Home** - Hero section, mission, programs preview, featured projects
2. **About** - Mission, vision, story, team, values
3. **Programs** - Workshops, courses, mentorship details
4. **Projects** - Student project gallery with filters
5. **Events** - Event calendar and registration form
6. **Blog** - Tutorials and articles
7. **Contact** - Contact form and information
8. **Donate** - Donation options and impact information

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open** `index.html` in a web browser
3. **Optional**: Use a local development server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
4. Visit `http://localhost:8000` in your browser

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ✨ Key Features

### Navigation
- Sticky navbar with scroll effects
- Mobile hamburger menu
- Active page highlighting

### Forms
- Event registration
- Contact form
- Newsletter subscription
- Donation form
- Client-side validation

### Animations
- Scroll reveal effects
- Hover interactions
- Parallax effects
- Smooth scrolling
- Loading animations

### SEO
- Semantic HTML structure
- Meta tags on all pages
- Structured data (JSON-LD)
- XML sitemap
- robots.txt
- Optimized images with alt text

## 🔧 Customization

### Update Contact Information
Edit contact details in all footer sections and contact page.

### Add Images
Place images in `/assets/images/` and update `src` attributes in HTML files.

### Modify Colors
Update CSS variables in `css/styles.css`:
```css
:root {
    --primary: #YourColor;
    --accent: #YourColor;
    /* etc. */
}
```

### Google Analytics
Replace `G-XXXXXXXXXX` in `index.html` and other pages with your GA4 measurement ID.

## 📊 Performance Tips

- Use WebP format for images
- Minify CSS and JS for production
- Enable gzip compression on server
- Use CDN for assets
- Implement caching headers

## 🌐 Deployment

### Recommended Platforms
- **Vercel**: Zero-config deployment
- **Netlify**: Easy drag-and-drop
- **GitHub Pages**: Free hosting for static sites
- **Cloudflare Pages**: Fast CDN included

### Quick Deploy
1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Deploy automatically

## 📝 To-Do / Future Enhancements

- [ ] Add actual images for projects and team
- [ ] Integrate real payment gateway for donations
- [ ] Create blog post template pages
- [ ] Add backend for form submissions
- [ ] Implement search functionality
- [ ] Add language switcher (Nepali/English)
- [ ] Create admin dashboard for content management

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 📞 Contact

**RoboYuwa**
- Email: info@roboyuwa.org
- Phone: +977 XXX-XXXXXXX
- Location: Kathmandu, Nepal

---

Built with ❤️ for Nepal's future innovators
