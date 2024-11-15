# Modern Personal Portfolio Page

A clean, responsive, and interactive personal portfolio webpage with modern design features and smooth animations.

## Features

- Dark/Light theme toggle
- Typing animation effect
- Fully responsive design
- Animated skill progress bars
- Smooth scroll navigation
- Section reveal animations
- Modern, minimalist UI
- Interactive skill cards

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons

## Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript for interactivity
├── config.js          # Configuration file for personal information and themes
└── README.md          # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Customize your information in `config.js`:
   - Update personal information (name, title, about text)
   - Set your profile picture URL
   - Configure your skills and progress levels
   - Add your social media links
   - Customize theme colors if desired
3. Open `index.html` in a web browser to view the page

## Customization

### Personal Information
Edit the `config.js` file to update your information:

```javascript
const config = {
    name: "Your Name",
    title: "Your Title",
    profileImage: "path/to/your/image.jpg",
    aboutMe: "Your description",
    // ... other configurations
};
```

### Changing Colors

The color scheme can be customized in `config.js` under the theme section:

```javascript
theme: {
    light: {
        primary: "#2ecc71",
        background: "#ffffff",
        // ... other color variables
    },
    dark: {
        // ... dark theme colors
    }
}
```

### Adding New Sections

1. Create a new section in `index.html`:
```html
<section id="new-section" class="section">
    <!-- Your content here -->
</section>
```

2. Add a navigation link:
```html
<a href="#new-section" class="nav-link">New Section</a>
```

## Features in Detail

### Theme Toggle
- Switches between light and dark themes
- Persists across page reloads
- Smooth transition animations

### Skill Bars
- Animated progress indicators
- Responsive to viewport
- Custom icons for each skill

### Animations
- Typing effect for name
- Scroll-based reveal animations
- Hover effects on interactive elements
- Smooth transitions between states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for typography
- Inspiration from modern portfolio designs
