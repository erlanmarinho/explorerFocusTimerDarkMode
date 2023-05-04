

export default function Controls({ buttonDarkMode, buttonLightMode, bodyDarkMode, buttonPlay, buttonPause }) {
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

  function play() {
     buttonPlay.classList.add("hide")
     buttonPause.classList.remove("hide")
     buttonStop.classList.remove("hide")
  }

  function pause() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }

  return {
    darkMode,
    lightMode,
    play,
    pause,
  }
}