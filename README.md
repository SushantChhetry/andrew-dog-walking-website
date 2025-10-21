# Husky Trails - Dog Walking Website

Welcome to the Husky Trails landing page! This is a minimal, mobile-first React application built with Vite showcasing professional dog walking services.

## Features

- **Hero Section**: Eye-catching headline with call-to-action buttons
- **Services**: Dog Walking, Pack Walks, and Pet Sitting offerings
- **Testimonials**: Client reviews and feedback
- **About**: Information about founder Andrew and Husky Trails
- **Contact Form**: Easy-to-use contact form for inquiries

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add the logo**:
   - Place your uploaded Husky Trails logo at `public/logo.png`
   - The logo should be a PNG file with transparent background for best results

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Technology Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Google Fonts** - Pacifico (handwritten headings) and Poppins (body text)

## Design Notes

- Mobile-first responsive design
- Deep forest green color scheme matching the logo
- Playful emoji icons (ready to swap for SVGs)
- Clean, modern styling with CSS variables

## Project Structure

```
├── public/
│   ├── index.html    # Main HTML template
│   └── logo.png      # Husky Trails logo (add your own)
├── src/
│   ├── components/   # React components
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── About.jsx
│   │   └── ContactForm.jsx
│   ├── App.jsx       # Root component
│   ├── main.jsx      # React entry point
│   └── styles.css    # Global styles
└── package.json      # Dependencies and scripts
```

## License

Private project for Husky Trails dog walking services.
