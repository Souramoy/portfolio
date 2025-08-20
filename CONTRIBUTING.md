# Contributing to Souramoy's Portfolio

Thank you for considering contributing to this portfolio project! This document provides guidelines for contributing.

## 🤝 How to Contribute

### Reporting Issues

1. **Search existing issues** first to avoid duplicates
2. **Use issue templates** when available
3. **Provide clear descriptions** with steps to reproduce
4. **Include relevant details** like browser version, OS, etc.

### Suggesting Features

1. **Check existing feature requests** to avoid duplicates
2. **Explain the use case** and why it would be beneficial
3. **Provide mockups or examples** if possible
4. **Consider the project scope** and whether it fits the portfolio theme

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Code Style Guidelines

#### JavaScript/JSX
- Use **ES6+ features** (arrow functions, destructuring, etc.)
- Follow **React best practices** (hooks, functional components)
- Use **meaningful variable names**
- Add **comments for complex logic**

#### CSS/Styling
- Use **CSS custom properties** for theming
- Follow **mobile-first** responsive design
- Maintain **consistent spacing** (use rem units)
- Use **semantic class names**

#### File Naming
- **Components**: PascalCase (e.g., `MyComponent.jsx`)
- **Utilities**: camelCase (e.g., `themeUtils.js`)
- **Styles**: kebab-case (e.g., `global-styles.css`)

### Testing

Before submitting a pull request:

1. **Test in multiple browsers** (Chrome, Firefox, Safari, Edge)
2. **Check responsive design** on different screen sizes
3. **Verify theme switching** works correctly
4. **Test animations** are smooth and performant
5. **Run linting** with `npm run lint`

### Pull Request Process

1. **Update documentation** if needed
2. **Add/update tests** for new features
3. **Follow commit message format**:
   ```
   type(scope): description
   
   Examples:
   feat(hero): add 3D model interaction
   fix(navbar): resolve theme toggle issue
   docs(readme): update installation guide
   style(contact): improve form styling
   ```

4. **Ensure builds pass** locally
5. **Request review** from maintainers

### Types of Contributions

#### 🐛 Bug Fixes
- UI/UX inconsistencies
- Performance issues
- Cross-browser compatibility
- Responsive design problems

#### ✨ Features
- New sections or components
- Enhanced animations
- Improved accessibility
- Theme enhancements

#### 📚 Documentation
- README improvements
- Code comments
- Setup guides
- API documentation

#### 🎨 Design
- Visual improvements
- Animation enhancements
- Color scheme updates
- Typography improvements

### Code Review Criteria

Pull requests will be evaluated on:

- **Functionality**: Does it work as intended?
- **Code Quality**: Is it readable and maintainable?
- **Performance**: Does it affect site speed?
- **Design**: Does it match the overall aesthetic?
- **Responsiveness**: Works on all screen sizes?
- **Accessibility**: Follows accessibility best practices?

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `style/description` - Styling changes
- `refactor/description` - Code refactoring

### Commit Guidelines

- Use **present tense** ("Add feature" not "Added feature")
- Use **imperative mood** ("Move cursor to..." not "Moves cursor to...")
- **Limit first line** to 72 characters
- **Reference issues** when applicable (#123)

### Getting Help

- **Create an issue** for questions
- **Check existing documentation** first
- **Be specific** about your problem
- **Provide context** and examples

## 📋 Development Checklist

Before submitting a pull request, ensure:

- [ ] Code follows project conventions
- [ ] Changes are tested across browsers
- [ ] Responsive design is maintained
- [ ] Animations are smooth and performant
- [ ] Theme system compatibility is preserved
- [ ] Documentation is updated if needed
- [ ] Commit messages follow convention
- [ ] Branch is up to date with main

## 🎯 Priority Areas

Current areas where contributions are especially welcome:

1. **Accessibility improvements**
2. **Performance optimizations**
3. **Cross-browser compatibility**
4. **Mobile experience enhancements**
5. **Animation refinements**

## 🚫 What Not to Contribute

Please avoid:

- **Breaking changes** without discussion
- **Large refactors** without prior approval
- **Personal branding changes** (this is a personal portfolio)
- **Unnecessary dependencies**
- **Non-functional decorative elements**

## 📜 Code of Conduct

This project follows a Code of Conduct to ensure a welcoming environment:

- **Be respectful** and inclusive
- **Provide constructive feedback**
- **Focus on the code**, not the person
- **Help others learn** and grow

Thank you for contributing to make this portfolio even better! 🚀
