# Performance Guide

Comprehensive guide for optimizing your portfolio website's performance.

## 📊 Current Performance

### Lighthouse Scores Target
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🚀 Bundle Optimization

### Code Splitting

**Route-based Splitting:**
```jsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
```

**Component-based Splitting:**
```jsx
// For heavy components
const HeavyComponent = lazy(() => 
  import('./HeavyComponent').then(module => ({
    default: module.HeavyComponent
  }))
);
```

### Bundle Analysis

**Analyze Bundle Size:**
```bash
npm run build
npx vite-bundle-analyzer dist
```

**Vite Config Optimization:**
```js
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['gsap'],
          icons: ['@phosphor-icons/react', 'react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
```

## 🖼️ Image Optimization

### Image Loading Strategy

**Lazy Loading Implementation:**
```jsx
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </div>
  );
};
```

### Image Formats

**WebP Implementation:**
```jsx
const OptimizedImage = ({ src, alt }) => (
  <picture>
    <source srcSet={`${src}.webp`} type="image/webp" />
    <source srcSet={`${src}.jpg`} type="image/jpeg" />
    <img src={`${src}.jpg`} alt={alt} />
  </picture>
);
```

**Responsive Images:**
```jsx
<img
  srcSet="image-320w.jpg 320w,
          image-640w.jpg 640w,
          image-1280w.jpg 1280w"
  sizes="(max-width: 320px) 280px,
         (max-width: 640px) 580px,
         1140px"
  src="image-1280w.jpg"
  alt="Description"
/>
```

## ⚡ Animation Optimization

### GSAP Performance

**Optimized Animation Setup:**
```jsx
useEffect(() => {
  // Use transform and opacity for best performance
  gsap.set('.element', { 
    willChange: 'transform',
    force3D: true 
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.element',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  tl.fromTo('.element', 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => {
        gsap.set('.element', { willChange: 'auto' });
      }
    }
  );

  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
```

### CSS Animations

**GPU-Accelerated Properties:**
```css
/* Use these properties for smooth animations */
.animated-element {
  transform: translateZ(0); /* Force GPU layer */
  will-change: transform, opacity;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Avoid animating these properties */
/* width, height, padding, margin, border */
```

## 🧠 Memory Management

### React Optimization

**Memoization:**
```jsx
import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => heavyProcessing(item));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return <div>{/* component content */}</div>;
});
```

**Event Listener Cleanup:**
```jsx
useEffect(() => {
  const handleScroll = throttle(() => {
    // Handle scroll
  }, 16); // 60fps

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
```

### GSAP Cleanup

**Proper Timeline Management:**
```jsx
useEffect(() => {
  const tl = gsap.timeline();
  
  // Animation setup...
  
  return () => {
    tl.kill(); // Clean up timeline
    ScrollTrigger.getAll().forEach(st => st.kill());
  };
}, []);
```

## 🌐 Network Optimization

### Resource Hints

**Preload Critical Resources:**
```html
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/images/hero-bg.webp" as="image">
```

**Prefetch Future Resources:**
```html
<link rel="prefetch" href="/images/project-1.webp">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
```

### Service Worker (Future)

**Basic Service Worker:**
```js
// sw.js
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## 📱 Mobile Optimization

### Touch Performance

**Optimize Touch Events:**
```css
/* Improve touch responsiveness */
.interactive-element {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* Reduce scroll jank */
.scroll-container {
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
```

### Viewport Management

**Responsive Viewport:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## 🔍 Monitoring & Analytics

### Performance Monitoring

**Web Vitals Tracking:**
```jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const sendToAnalytics = (metric) => {
  gtag('event', metric.name, {
    custom_parameter_1: metric.value,
    custom_parameter_2: metric.id,
  });
};

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Real User Monitoring

**Performance Observer:**
```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === 'navigation') {
      console.log('Page Load Time:', entry.loadEventEnd - entry.fetchStart);
    }
  });
});

observer.observe({ entryTypes: ['navigation'] });
```

## ⚙️ Build Optimization

### Vite Configuration

**Optimized Build Config:**
```js
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'animations';
            if (id.includes('react')) return 'react-vendor';
            return 'vendor';
          }
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
});
```

### CSS Optimization

**PurgeCSS Integration:**
```js
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' 
      ? [require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.{js,jsx,ts,tsx}'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })]
      : [])
  ]
};
```

## 🎯 Performance Checklist

### Pre-deployment

- [ ] **Bundle Analysis**: Check bundle size and composition
- [ ] **Image Optimization**: Compress and convert to WebP
- [ ] **Code Splitting**: Implement route and component splitting
- [ ] **Tree Shaking**: Remove unused code
- [ ] **Minification**: Enable CSS and JS minification

### Runtime Optimization

- [ ] **Lazy Loading**: Implement for images and components
- [ ] **Memoization**: Use React.memo and useMemo appropriately
- [ ] **Event Cleanup**: Remove event listeners in useEffect cleanup
- [ ] **Animation Cleanup**: Properly dispose GSAP timelines
- [ ] **Memory Leaks**: Check for and fix memory leaks

### Monitoring

- [ ] **Lighthouse Audit**: Regular performance audits
- [ ] **Real User Monitoring**: Track actual user performance
- [ ] **Core Web Vitals**: Monitor LCP, FID, CLS
- [ ] **Error Tracking**: Implement error monitoring
- [ ] **Analytics**: Track user interactions and performance

## 🛠️ Tools & Resources

### Performance Testing
- **Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: Advanced performance testing
- **GTmetrix**: Performance analysis with recommendations
- **Pingdom**: Website speed testing

### Monitoring Services
- **Vercel Analytics**: Built-in performance monitoring
- **Google PageSpeed Insights**: Free performance analysis
- **New Relic**: Comprehensive application monitoring
- **Sentry**: Error tracking and performance monitoring

### Build Tools
- **Webpack Bundle Analyzer**: Visualize bundle composition
- **Source Map Explorer**: Analyze bundle size by source
- **Bundle Buddy**: Understand bundle dependencies

---

*Regular performance monitoring and optimization ensure your portfolio loads fast and provides an excellent user experience.*
