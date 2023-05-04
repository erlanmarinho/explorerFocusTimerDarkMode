

export default function Controls({ buttonDarkMode, buttonLightMode, bodyDarkMode }) {
  function darkMode() {
    buttonDarkMode.classList.add("hide")
    buttonLightMode.classList.remove("hide")
    bodyDarkMode.classList.toggle("light")
  }

  function lightMode() {
    buttonDarkMode.classList.remove("hide")
    buttonLightMode.classList.add("hide")
    bodyDarkMode.classList.toggle("light")
  }

  return {
    darkMode,
    lightMode,
  }
}