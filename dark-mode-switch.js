const darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", () => {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", () => {
      resetTheme();
    });
  }
});

/**
 * Summary function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description iniTheme is a function that uses localStorage from JavaScrip DOM,
 * and stores there the value of the HTML switch, if the switch was already
 * switches to 'on' it will set an HTML attribute to the body named:
 * 'data-theme' to a 'dark' value, if it is the first time we open this page, or
 * the switch  was off it will remove the 'data-theme' attribute.
 * @return {void}
 */
function initTheme() {
  const darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected
    ? document.body.setAttribute("data-theme", "dark")
    : document.body.removeAttribute("data-theme");
}

/**
 * Summary resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * it will set the HTML attribute 'data-theme' to dark, and this will lead into
 * CSS changing the color.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
  }
}
