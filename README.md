# Developer Portfolio Website

A professional, modern, and responsive portfolio website for a PHP Laravel Developer.

## Features

- **Premium Dark Theme**: Elegant dark design with subtle gradients and modern animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Accessible navigation with smooth scrolling
- **Hero Section**: Introduction with profile placeholder and CTA buttons
- **About Me**: Personal introduction with statistics
- **Skills Section**: Organized technical skills with category tags
- **Work Experience**: Timeline-based experience display
- **Featured Projects**: Project cards with technology tags and links
- **AI Tools Section**: Showcase of AI tools and technologies
- **Contact Form**: Functional form with validation
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation support

## Technology Stack

- HTML5
- CSS3 (Custom CSS with CSS Variables)
- Vanilla JavaScript
- No external dependencies or frameworks

## Project Structure

```
prot_dev/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # JavaScript functionality
├── assets/            # Images and static assets
└── README.md          # This file
```

## Customization

### Personal Information

Replace the following placeholders in `index.html` with your actual information:

- `[Your Name]` - Your full name
- `[your.email@example.com]` - Your email address
- `[Your City, Country]` - Your location
- `[linkedin.com/in/yourprofile]` - Your LinkedIn profile URL
- `[github.com/yourusername]` - Your GitHub profile URL
- `[GitHub URL]` - Your GitHub URL for footer
- `[LinkedIn URL]` - Your LinkedIn URL for footer
- `[Twitter URL]` - Your Twitter URL for footer

### Work Experience

Update the work experience section with your actual employment history:

```html
<div class="experience-item">
    <div class="experience-date">[Start Date] - [End Date/Present]</div>
    <div class="experience-content">
        <h3 class="experience-title">[Job Title]</h3>
        <p class="experience-company">[Company Name]</p>
        <ul class="experience-responsibilities">
            <li>[Responsibility 1]</li>
            <li>[Responsibility 2]</li>
            <li>[Responsibility 3]</li>
        </ul>
    </div>
</div>
```

### Projects

Update the featured projects section with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project screenshot here -->
    </div>
    <div class="project-content">
        <h3 class="project-title">[Project Name]</h3>
        <p class="project-description">[Project description]</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="[GitHub URL]" class="project-link">GitHub</a>
            <a href="[Live Demo URL]" class="project-link">Live Demo</a>
        </div>
    </div>
</div>
```

### Statistics

Update the about section statistics:

```html
<div class="stat-item">
    <span class="stat-number">[Number]</span>
    <span class="stat-label">[Label]</span>
</div>
```

### Profile Image

Replace the profile placeholder with your actual photo:

1. Add your photo to the `assets/` folder
2. Update the hero section in `index.html`:

```html
<div class="hero-image">
    <img src="assets/your-photo.jpg" alt="[Your Name]" class="profile-photo">
</div>
```

3. Add corresponding CSS:

```css
.profile-photo {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--accent-primary);
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
    animation: float 6s ease-in-out infinite;
}
```

### Contact Form

The contact form currently simulates submission. To make it functional:

1. Create a backend endpoint (e.g., PHP, Node.js, or a service like Formspree)
2. Update the form submission in `js/main.js`:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message })
})
.then(response => response.json())
.then(data => { /* handle success */ })
.catch(error => { /* handle error */ });
```

Or use a service like Formspree by updating the form tag:

```html
<form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
```

## Color Customization

Modify the CSS variables in `css/style.css` to customize the color scheme:

```css
:root {
    --bg-primary: #0a0a0f;           /* Main background */
    --bg-secondary: #12121a;         /* Secondary background */
    --bg-tertiary: #1a1a24;          /* Card background */
    --text-primary: #ffffff;         /* Main text */
    --text-secondary: #a0a0b0;       /* Secondary text */
    --text-muted: #6b6b7b;           /* Muted text */
    --accent-primary: #6366f1;      /* Primary accent */
    --accent-secondary: #8b5cf6;     /* Secondary accent */
}
```

## Deployment

### Local Development

1. Open the project folder in a web server
2. For PHP development, use WAMP, XAMPP, or Laravel Valet
3. Navigate to `http://localhost/prot_dev`

### Production Deployment

1. **Static Hosting** (Netlify, Vercel, GitHub Pages):
   - Upload the files directly
   - No build process required

2. **Traditional Hosting**:
   - Upload files to your web server
   - Ensure the file structure is maintained

3. **PHP Hosting**:
   - Upload to your PHP hosting environment
   - May need to configure `.htaccess` for routing

## Performance Optimization

The website is already optimized with:
- Minimal external dependencies
- CSS variables for maintainability
- Efficient JavaScript with event delegation
- Lazy loading ready (add `loading="lazy"` to images)
- Semantic HTML for better SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Reduced motion support

## License

This portfolio template is free to use and modify for personal and commercial projects.

## Credits

Built with ❤️ using HTML, CSS, and JavaScript.

## Contact

For questions or support, please reach out through the contact form on the website.