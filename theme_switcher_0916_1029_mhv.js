// 代码生成时间: 2025-09-16 10:29:24
const _ = require('lodash');

// Default theme
const defaultTheme = 'light';

// Current theme state
let currentTheme = localStorage.getItem('currentTheme') || defaultTheme;

// Function to switch themes
function switchTheme(theme) {
  // Validate the theme
  if (!_.includes(['light', 'dark'], theme)) {
    console.error('Invalid theme:', theme);
    return;
  }

  // Update the current theme state
  currentTheme = theme;

  // Update the local storage
  localStorage.setItem('currentTheme', theme);

  // Update the document body class to reflect the theme change
  document.body.className = theme;

  // Log the theme switch for debugging purposes
  console.log(`Theme switched to: ${theme}`);
}

// Function to initialize the theme based on local storage or default
function initTheme() {
  const storedTheme = localStorage.getItem('currentTheme');
  if (storedTheme) {
    switchTheme(storedTheme);
  } else {
    switchTheme(defaultTheme);
  }
}

// Initialize the theme when the script loads
initTheme();

// Export the switchTheme function for use in other parts of the application
module.exports = { switchTheme, initTheme };