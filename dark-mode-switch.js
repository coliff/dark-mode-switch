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
  // CSS for dark mode
  var cssDark = `body {
    background-color: #111 !important;
    color: #eee;
  }
  
  .bg-light {
    background-color: #333 !important;
  }
  
  .bg-white {
    background-color: #000 !important;
  }
  
  .bg-black {
    background-color: #eee !important;
  }`;

  // CSS for light mode
  var cssLight = `body {
    background-color: #f2f2f2 !important;
    color: #212529;
  }
  
  .bg-light {
    background-color: #f8f9fa !important;
  }
  
  .bg-white {
    background-color: #fff !important;
  }
  
  .bg-black {
    background-color: #eee !important;
  }`;

  head = document.head || document.getElementsByTagName('head')[0];
  style = document.createElement('style');
  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = color === 'dark' ? cssDark : cssLight;
  } else {
    style.appendChild(document.createTextNode(color === 'dark' ? cssDark : cssLight));
  }
}