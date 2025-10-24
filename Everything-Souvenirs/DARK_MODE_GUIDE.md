# Dark Mode Implementation Guide

## Overview

This application now supports dark and light mode themes with smooth transitions. The theme preference is automatically saved to localStorage and persists across sessions.

## Features

- **Smooth Transitions**: All color changes animate smoothly over 300ms
- **Persistent Preference**: Theme choice is saved in localStorage
- **Accessible Toggle**: Sun/moon icon button in top-right corner
- **Full Coverage**: Dark mode styles applied to all components
- **WCAG Compliant**: Maintains proper contrast ratios in both themes

## How It Works

### 1. Theme Context (`src/context/ThemeContext.jsx`)

Manages theme state globally using React Context:
- Reads initial theme from localStorage
- Applies/removes 'dark' class on document root
- Provides `theme` and `toggleTheme` to all components

### 2. Theme Toggle Button (`src/components/ThemeToggle.jsx`)

Fixed position button (top-right) that:
- Shows sun icon in dark mode
- Shows moon icon in light mode
- Includes hover and scale animations
- Positioned with z-index: 50 to stay on top

### 3. Tailwind CSS Dark Mode

Uses Tailwind's built-in dark mode with class strategy:
- `dark:` prefix applies styles when `<html>` has class="dark"
- Example: `bg-white dark:bg-gray-800`

## Usage

### In Components

Apply dark mode styles using Tailwind's `dark:` prefix:

```jsx
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Content
</div>
```

### Color Palette

**Light Mode:**
- Backgrounds: white, blue-50, gray-100
- Text: gray-900, gray-700, gray-600
- Accents: blue-600, emerald-500

**Dark Mode:**
- Backgrounds: gray-800, gray-900, black
- Text: white, gray-300, gray-400
- Accents: blue-400, emerald-600

### Transitions

All color-changing elements include:
```jsx
className="transition-colors duration-300"
```

## Integration

The dark mode system is integrated in `App.jsx`:

```jsx
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="...dark mode classes...">
        <ThemeToggle />
        {/* Rest of app */}
      </div>
    </ThemeProvider>
  );
}
```

## Demo Component

See `src/components/DarkModeDemo.jsx` for examples of:
- Cards with dark mode
- Buttons with dark mode
- Typography with dark mode
- Color transitions

## Accessibility

- Toggle button includes `aria-label` for screen readers
- All text maintains WCAG AA contrast ratios
- Keyboard navigation fully supported
- No flashing or abrupt color changes

## Browser Support

Works in all modern browsers that support:
- CSS custom properties
- localStorage API
- Tailwind CSS v4+
