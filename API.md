# API Documentation

This document outlines the external APIs and integrations used in the portfolio.

## 🌐 External Integrations

### Theme System API

The portfolio includes a custom theme management system.

#### Theme Context

```jsx
import { useTheme } from './context/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

**Methods:**
- `theme`: Current theme ('light' | 'dark')
- `toggleTheme()`: Switches between themes
- `setTheme(newTheme)`: Sets specific theme

**Storage:**
- Persisted in `localStorage` as `portfolio-theme`
- Automatically detects system preference on first visit

### GSAP Animation API

Animation system using GSAP library.

#### ScrollTrigger Integration

```jsx
gsap.timeline({
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    end: 'bottom 20%',
    scroller: '.scroll-container'
  }
});
```

**Configuration:**
- Smooth scroll with Locomotive Scroll (currently disabled)
- Custom scroll triggers for each section
- Performance-optimized animations

### Contact Form Integration

#### Form Structure

```jsx
const contactData = {
  name: string,
  email: string,
  subject: string,
  message: string
};
```

**Validation:**
- Required fields: name, email, message
- Email format validation
- Character limits for textarea

**Current State:**
- Form UI implemented
- Backend integration pending
- Can be connected to services like:
  - Formspree
  - Netlify Forms
  - EmailJS
  - Custom API endpoint

## 🔗 Third-Party Services

### Image Hosting

**Current Setup:**
- Profile images: Local assets (`src/assets/`)
- Project images: External URLs (Pexels, GitHub)
- Fallback handling for broken images

**Recommended Services:**
- Cloudinary (with automatic optimization)
- Vercel Image Optimization
- AWS S3 + CloudFront

### Analytics (Optional Integration)

#### Google Analytics

```jsx
// Environment-based loading
if (import.meta.env.PROD) {
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: document.title,
    page_location: window.location.href
  });
}
```

#### Vercel Analytics

```jsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

## 🎨 Asset Management

### Static Assets

**Structure:**
```
src/
  assets/
    profile.png     # Profile image
    icons/          # Custom icons
    images/         # Local images
```

**Optimization:**
- Use WebP format when possible
- Implement lazy loading
- Compress images before deployment

### External Assets

**CDN Usage:**
- Pexels API for demo project images
- Font loading from Google Fonts (if used)
- Icon libraries (Phosphor Icons, React Icons)

## 🔒 Environment Configuration

### Environment Variables

```env
# Production
VITE_APP_ENV=production
VITE_API_URL=https://api.yourdomain.com
VITE_CONTACT_ENDPOINT=/api/contact
VITE_ANALYTICS_ID=your-analytics-id

# Development
VITE_APP_ENV=development
VITE_API_URL=http://localhost:3001
VITE_CONTACT_ENDPOINT=/api/contact
```

### Usage in Components

```jsx
const API_URL = import.meta.env.VITE_API_URL;
const isProduction = import.meta.env.PROD;
```

## 📡 Future API Integrations

### Contact Form Backend

**Recommended Implementation:**

1. **Serverless Function** (Vercel/Netlify)
   ```js
   // api/contact.js
   export default async function handler(req, res) {
     const { name, email, message } = req.body;
     
     // Send email via SendGrid/SES
     // Store in database (optional)
     
     res.status(200).json({ success: true });
   }
   ```

2. **Third-Party Service**
   ```jsx
   // Using Formspree
   <form action="https://formspree.io/f/your-form-id" method="POST">
     {/* form fields */}
   </form>
   ```

### Blog Integration (Future)

**Headless CMS Options:**
- Strapi
- Contentful
- Sanity
- Ghost

**Implementation Example:**
```jsx
const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};
```

### Project Data Management

**Current:** Static array in `Projects.jsx`

**Future Options:**
1. **JSON File**
   ```js
   import projectsData from '../data/projects.json';
   ```

2. **CMS Integration**
   ```js
   const projects = await fetch('/api/projects').then(res => res.json());
   ```

3. **GitHub API** (for automatic project fetching)
   ```js
   const repos = await fetch('https://api.github.com/users/username/repos');
   ```

## 🛠️ Development APIs

### Hot Module Replacement

Vite provides HMR for development:
```js
if (import.meta.hot) {
  import.meta.hot.accept();
}
```

### Build API

**Development:**
```bash
npm run dev    # Starts development server
```

**Production:**
```bash
npm run build  # Creates production build
npm run preview # Previews production build
```

## 📊 Performance Monitoring

### Web Vitals

Monitor Core Web Vitals:
```js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Error Tracking

**Sentry Integration:**
```js
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

## 🔐 Security Considerations

### Content Security Policy

**Recommended Headers:**
```
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com;
```

### API Security

**Best Practices:**
- Use HTTPS for all API calls
- Implement rate limiting
- Validate all inputs
- Sanitize user content
- Use environment variables for sensitive data

## 📝 API Testing

### Testing Contact Form

```js
// Test contact form submission
const testContactForm = async () => {
  const formData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Subject',
    message: 'Test message'
  };
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  return response.json();
};
```

### Performance Testing

```bash
# Test API response times
curl -w "@curl-format.txt" -s -o /dev/null https://your-api.com/endpoint

# Load testing with Artillery
npm install -g artillery
artillery quick --count 10 --num 5 https://your-site.com
```

---

*This API documentation will evolve as more integrations are added to the portfolio.*
