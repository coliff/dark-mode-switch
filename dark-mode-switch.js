// Global darkSwitch
var darkSwitch = null;

/**
 * Execute at the beginning of the document
 * If this is placed in <head> there will be no flickering
 */
(function () {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';

  darkThemeSelected ? applyBackgroundTheme("dark") : applyBackgroundTheme("light");
})();

// Initialize js theme controls after document load
window.addEventListener('load', () => {
  darkSwitch = document.getElementById('darkSwitch');
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});


/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
}


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set a style with the appropriate background
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    applyBackgroundTheme('dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    applyBackgroundTheme('light');
    localStorage.removeItem('darkSwitch');
  }
}

/**
 * Apply the stylesheet with the appropriate theme
 * @param {*} color 
 */
function applyBackgroundTheme(color) {
  // CSS path for dark mode
  var cssDark = 'dark-mode.css';

  if (color === 'dark') { // If dark mode is enabled add css
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    style.setAttribute("href", cssDark);
    style.setAttribute("id", "dark-mode-switch");
    head.appendChild(style);
  } else { // If light mode is enabled remove style
    darkModeStyle = document.getElementById("dark-mode-switch");
    if (darkModeStyle !== null && typeof darkModeStyle !== 'undefined')
      darkModeStyle.parentNode.removeChild(darkModeStyle);
  }
}