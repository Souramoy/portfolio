# Souramoy's Portfolio

A modern, glass-morphism portfolio website built with React, featuring smooth animations, dark/light theme toggle, and stunning visual effects.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## ✨ Features

- **Glass Morphism Design**: Modern glassmorphic UI with blur effects and transparency
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Smooth Animations**: GSAP-powered animations and scroll triggers
- **Responsive Design**: Optimized for all device sizes
- **Interactive Elements**: Floating particles, hover effects, and micro-interactions
- **Project Showcase**: Featured projects with live demos and tech stacks
- **Contact Form**: Functional contact section with glass-styled form elements

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Animations**: GSAP, ScrollTrigger
- **Styling**: Tailwind CSS, Styled-JSX
- **Icons**: Phosphor Icons, React Icons
- **Theme**: React Context API
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Theme System

The portfolio features a custom theme system with:

- **Automatic Theme Detection**: Detects system preference on first visit
- **Persistent Storage**: Remembers user preference in localStorage
- **Smooth Transitions**: CSS transitions for seamless theme switching
- **Variable-based Styling**: CSS custom properties for consistent theming

### Theme Toggle

Click on "Souramoy" in the navigation bar to toggle between themes. The theme indicator (🌙/☀️) shows the current theme state.

## 🌟 Featured Projects

### Your Song
- **Description**: Song recommendation system with amazing UI and multi-language support
- **Tech Stack**: HTML, CSS, Gemini 2.5 Pro, YouTube API
- **Live Demo**: [junior-delta.vercel.app](https://junior-delta.vercel.app/)

### AI Career Coach
- **Description**: AI-powered career guidance platform
- **Tech Stack**: React, Node.js, AI/ML
- **Live Demo**: [career-coach-demo.vercel.app](https://career-coach-demo.vercel.app/)

### Nebula UI Kit
- **Description**: A glassy, neon component library with modern design patterns
- **Tech Stack**: React, GSAP, CSS

### Parallax Gallery
- **Description**: Locomotive smooth parallax reels with immersive scrolling
- **Tech Stack**: React, Locomotive, WebGL

### Spline Hero
- **Description**: 3D-embedded hero composition with interactive elements
- **Tech Stack**: React, Spline, Three.js

### Motion Bento
- **Description**: Bento grid layout with hover depth and micro-interactions
- **Tech Stack**: GSAP, ScrollTrigger, CSS Grid

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form and info
│   ├── Footer.jsx      # Footer component
│   ├── GlowOrbs.jsx    # Animated background orbs
│   ├── Hero.jsx        # Hero section with 3D model
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Preloader.jsx   # Loading screen
│   └── Projects.jsx    # Projects showcase
├── styles/             # Styling files
│   └── global.css      # Global styles and CSS variables
├── assets/             # Static assets
│   └── profile.png     # Profile image
├── context/            # React context
│   └── ThemeContext.jsx # Theme management
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Base styles
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --primary: #00f5ff;
  --secondary: #ff6b6b;
  --background: #0a0a0a;
  --glass: rgba(255, 255, 255, 0.05);
  /* ... more variables */
}
```

### Content
- Update personal information in `Hero.jsx`
- Modify projects array in `Projects.jsx`
- Edit contact details in `Contact.jsx`

### Animations
Customize GSAP animations in component `useEffect` hooks.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Souramoy** - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/) for powerful animations
- [Phosphor Icons](https://phosphoricons.com/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for lightning-fast development

---

⭐ Star this repository if you found it helpful!
