# Deployment Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment Options

### Option 1: Netlify (Recommended)

**Method A: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area
4. Your site will be live instantly!

**Method B: Git Integration**
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

### Option 2: Vercel

**Method A: Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Method B: Git Integration**
1. Push to GitHub
2. Connect repo at [vercel.com](https://vercel.com)
3. Automatic deployment

### Option 3: GitHub Pages

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

## Customization Checklist

Before deploying, make sure to update:

- [ ] **Personal Information**
  - [ ] Name in Hero section
  - [ ] Email and contact details
  - [ ] Social media links
  - [ ] Location information

- [ ] **Academic Details**
  - [ ] University name and graduation year
  - [ ] GPA and academic achievements
  - [ ] Coursework and relevant subjects

- [ ] **Awards & Honors**
  - [ ] UPE scholarship details
  - [ ] Other awards and recognitions
  - [ ] Dates and organizations

- [ ] **Certifications**
  - [ ] NPTEL, Coursera, and other certificates
  - [ ] Credential IDs and verification links
  - [ ] Completion dates

- [ ] **Projects**
  - [ ] Project descriptions and technologies
  - [ ] GitHub repository links
  - [ ] Live demo URLs
  - [ ] Project images

- [ ] **Experience**
  - [ ] Internships and work experience
  - [ ] Research positions
  - [ ] Volunteer work

- [ ] **Skills**
  - [ ] Programming languages
  - [ ] Frameworks and tools
  - [ ] Technical competencies

- [ ] **Resume**
  - [ ] Create actual resume.pdf file
  - [ ] Place in public folder
  - [ ] Update download link

## SEO Optimization

The website includes:
- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML elements
- Alt text for images

## Performance Features

- Vite for fast builds and hot reload
- Code splitting for optimal loading
- Optimized images and assets
- Lazy loading for better UX
- Responsive design for all devices

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

**Build Errors:**
- Check Node.js version (16+ required)
- Clear node_modules and reinstall
- Check for syntax errors in components

**Deployment Issues:**
- Ensure build command is correct
- Check publish directory setting
- Verify all dependencies are installed

**Styling Issues:**
- Check CSS file imports
- Verify responsive breakpoints
- Test on different devices

## Support

For issues or questions:
1. Check the README.md file
2. Review component documentation
3. Open an issue on GitHub
4. Contact the developer

## Next Steps

After deployment:
1. Test all links and forms
2. Verify mobile responsiveness
3. Check loading performance
4. Update social media profiles
5. Share with potential employers/universities
