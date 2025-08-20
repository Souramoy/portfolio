# Deployment Guide

This guide covers different ways to deploy your portfolio website.

## 🚀 Vercel (Recommended)

Vercel provides the easiest deployment experience for React applications.

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import your repository
   - Vercel will auto-detect Vite configuration

3. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes
   - Get a custom domain or use Vercel's subdomain

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

## 🌐 Netlify

Netlify offers great features for static site hosting.

### Drag & Drop Deployment

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Visit [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deploy area
   - Your site is live!

### Git Integration

1. **Connect Repository**
   - Sign up on Netlify
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (in environment variables)

## 📦 GitHub Pages

Deploy using GitHub Actions for automatic updates.

### Setup GitHub Pages

1. **Create workflow file**
   ```bash
   mkdir -p .github/workflows
   ```

2. **Add deployment workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: 'npm'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Configure Repository**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

### Update Vite Config

For GitHub Pages, update `vite.config.ts`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Add this line
})
```

## ☁️ AWS S3 + CloudFront

For custom domain and AWS infrastructure.

### S3 Bucket Setup

1. **Create S3 Bucket**
   - Enable static website hosting
   - Set index document to `index.html`
   - Configure bucket policy for public access

2. **Upload Files**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

### CloudFront Distribution

1. **Create Distribution**
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Enable compression

2. **Custom Domain**
   - Add CNAME record in DNS
   - Configure SSL certificate

## 🐳 Docker Deployment

Containerize your application for any platform.

### Dockerfile

Create `Dockerfile`:
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx Configuration

Create `nginx.conf`:
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
```

### Deploy with Docker

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 80:80 portfolio
```

## 🔧 Environment Variables

For different deployment environments:

### Production Variables

Create `.env.production`:
```env
VITE_APP_ENV=production
VITE_API_URL=https://api.yourdomain.com
VITE_ANALYTICS_ID=your-analytics-id
```

### Staging Variables

Create `.env.staging`:
```env
VITE_APP_ENV=staging
VITE_API_URL=https://api-staging.yourdomain.com
```

## 📊 Performance Optimization

### Pre-deployment Checklist

- [ ] **Build size analysis**
  ```bash
  npm run build
  npx vite-bundle-analyzer dist
  ```

- [ ] **Lighthouse audit**
  ```bash
  npm install -g lighthouse
  lighthouse https://your-site.com --view
  ```

- [ ] **Image optimization**
  - Compress images with tools like TinyPNG
  - Use WebP format when possible
  - Implement lazy loading

- [ ] **Code splitting**
  - Use dynamic imports for large components
  - Implement route-based code splitting

### Build Optimizations

Update `vite.config.ts` for production:
```js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['gsap']
        }
      }
    }
  }
})
```

## 🌍 Custom Domain

### DNS Configuration

For custom domain setup:

1. **A Records** (for root domain)
   ```
   @ -> [Hosting Provider IP]
   ```

2. **CNAME Records** (for subdomains)
   ```
   www -> your-site.vercel.app
   ```

### SSL Certificate

Most hosting providers offer free SSL:
- **Vercel**: Automatic SSL with custom domains
- **Netlify**: Free SSL with Let's Encrypt
- **CloudFlare**: Free SSL proxy

## 🔍 Monitoring

### Analytics Setup

Add analytics to track performance:

```jsx
// In main.jsx or App.jsx
if (import.meta.env.PROD) {
  // Google Analytics
  gtag('config', 'GA_MEASUREMENT_ID');
  
  // Or Vercel Analytics
  import { Analytics } from '@vercel/analytics/react';
}
```

### Error Monitoring

Consider adding error tracking:
- **Sentry**: Error tracking and performance monitoring
- **LogRocket**: Session replay and monitoring

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Clear `node_modules` and reinstall
   - Verify environment variables

2. **Routing Issues**
   - Configure redirects for SPA routing
   - Set up fallback to `index.html`

3. **Asset Loading**
   - Check base URL configuration
   - Verify asset paths in production

### Debug Commands

```bash
# Check build output
npm run build && npm run preview

# Analyze bundle size
npx vite-bundle-analyzer dist

# Test production build locally
npx serve dist
```

---

🎉 **Congratulations!** Your portfolio is now live and ready to showcase your work!
