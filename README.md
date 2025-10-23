# Academic Portfolio Website

A modern, responsive portfolio website built with React + Vite, showcasing academic achievements, awards (including Upsilon Pi Epsilon Honor Society Scholarship), certifications, and technical projects.

## Features

- **Modern Design**: Glassmorphic design with dark/blue gradient theme
- **Responsive**: Fully responsive across all devices
- **Accessible**: ARIA labels, alt text, and keyboard navigation
- **SEO Optimized**: Meta tags and structured data
- **Smooth Animations**: Framer Motion animations and transitions
- **Interactive**: Hover effects and smooth scrolling
- **Performance**: Optimized with Vite for fast loading

## Sections

- **Hero**: Introduction with photo placeholder and CTA buttons
- **About**: Personal information and technical skills
- **Projects**: Portfolio of technical projects with filtering
- **Awards**: Highlighting UPE scholarship and other honors
- **Certifications**: NPTEL, Coursera, and other certifications
- **Timeline**: Education and experience timeline
- **Contact**: Contact form and social links
- **Footer**: Additional links and information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd academic-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

1. **Hero Section** (`src/components/Hero/Hero.jsx`):
   - Replace "Your Name" with your actual name
   - Update the subtitle and description
   - Add your actual photo to replace the placeholder

2. **About Section** (`src/components/About/About.jsx`):
   - Update the personal description
   - Modify the skills array with your actual skills
   - Update the statistics

3. **Awards Section** (`src/components/Awards/Awards.jsx`):
   - Replace placeholder awards with your actual achievements
   - Ensure UPE scholarship is prominently featured
   - Update award descriptions and dates

4. **Certifications** (`src/components/Certifications/Certifications.jsx`):
   - Replace with your actual certifications
   - Update provider names, dates, and credential IDs
   - Add real certificate URLs

5. **Projects** (`src/components/Projects/Projects.jsx`):
   - Replace with your actual projects
   - Update descriptions, technologies, and links
   - Add real project images

6. **Timeline** (`src/components/Timeline/Timeline.jsx`):
   - Update education and experience details
   - Replace with your actual timeline
   - Update achievements and descriptions

7. **Contact** (`src/components/Contact/Contact.jsx`):
   - Update email, phone, and location
   - Replace social media links
   - Update the contact form action

### Styling

- Colors can be customized in `src/styles/global.css`
- Component-specific styles are in individual CSS files
- The main color scheme uses `#00aaff` (blue) as the primary color

## Deployment

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify, or:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository directly on Vercel.

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## SEO Optimization

The website includes:
- Meta tags for title, description, and keywords
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Structured data for better search engine understanding
- Semantic HTML elements
- Alt text for images
- ARIA labels for accessibility

## Performance

- Optimized with Vite for fast builds
- Code splitting for better loading performance
- Optimized images and assets
- Lazy loading for better user experience

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, please open an issue or contact the developer.



